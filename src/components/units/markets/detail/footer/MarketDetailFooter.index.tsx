import Link from "next/link";
import * as S from "./MarketDetailFooter.styles";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/stores";
import { useMutationCreatePointTransactionOfBuyingAndSelling } from "../../../../commons/hooks/mutations/useMutationCreatePointTransactionOfBuyingAndSelling";
import { Modal } from "antd";
import { useState } from "react";
interface IMarketDetailFooterProps {
  sellerId: string;
  useditemId: string;
  buyerId?: string;
}
export default function MarketDetailFooter(
  props: IMarketDetailFooterProps,
): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [buying] = useMutationCreatePointTransactionOfBuyingAndSelling();
  const onClickBuying = (): void => {
    setIsOpen((prev) => !prev);
  };
  const buyingItem = (useritemId: string) => async () => {
    if (props.buyerId) {
      Modal.error({ content: "이미 판매된 상품입니다." });
      return;
    }
    try {
      const result = await buying({
        variables: {
          useritemId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchPointTransactions: (prev) => {
                return [data.createPointTransactionOfBuyingAndSelling, ...prev];
              },
              fetchUseditems: (prev, { readField }) => {
                const deleteId = data.createPointTransactionOfBuyingAndSelling;
                const filteredPrev = prev.filter(
                  (el) => readField("_id", el) !== deleteId._id,
                );
                return [...filteredPrev];
              },
            },
          });
        },
      });
      setIsOpen(false);
      setUserInfo({
        ...userInfo,
        amount:
          userInfo.amount -
          result.data?.createPointTransactionOfBuyingAndSelling.price,
      });
      Modal.success({ content: "상품을 정상적으로 구매했습니다." });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "상품 구매에 실패했습니다. 다시 시도해주세요.",
        });
    }
  };
  return (
    <S.Wrapper>
      <Link href="/markets">
        <a>
          <S.ListButton>목록으로</S.ListButton>
        </a>
      </Link>
      {userInfo.id === props.sellerId ? (
        <Link href={`/markets/${props?.useditemId}/edit`}>
          <a>
            <S.BuyButton>수정하기</S.BuyButton>
          </a>
        </Link>
      ) : (
        <>
          <Modal
            open={isOpen}
            onOk={buyingItem(props?.useditemId)}
            onCancel={onClickBuying}
          >
            <p>이 상품을 구매하시겠습니까?</p>
          </Modal>
          <S.BuyButton onClick={onClickBuying}>구매하기</S.BuyButton>
        </>
      )}
    </S.Wrapper>
  );
}
