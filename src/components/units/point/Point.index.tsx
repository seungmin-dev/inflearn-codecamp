import { useRecoilState } from "recoil";
import { useMutationCreatePointTransactionOfLoading } from "../../../commons/hooks/mutations/useMutationCreatePointTransactionOfLoading";
import { Modal } from "antd";
import * as S from "./Point.styles";
import { userInfoState } from "../../../commons/stores";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const window: typeof globalThis & {
  IMP: any;
};

export const Point = (): JSX.Element => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [pointLoading] = useMutationCreatePointTransactionOfLoading();

  const onClickPayment = (amount: number) => (): void => {
    let IMP;
    if (typeof window !== "undefined" && typeof window.IMP !== "undefined") {
      IMP.init("imp49910675");
      IMP.request_pay(
        {
          pg: "kakaopay",
          pay_method: "card",
          // merchant_uid: "ORD20180131-0000011",
          name: `${amount}원 충전`,
          amount,
          buyer_email: userInfo.email,
          buyer_name: userInfo.name,
          buyer_tel: "010-4242-4242",
          buyer_addr: "서울특별시 강남구 신사동",
          buyer_postcode: "01181",
          m_redirect_url: "http://localhost:3000/point",
        },
        async (rsp: any) => {
          if (rsp.success) {
            const result = await pointLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            setUserInfo({
              ...userInfo,
              amount:
                userInfo.amount +
                result.data?.createPointTransactionOfLoading.amount,
            });
            Modal.success({ content: `${amount}원 충전이 완료되었습니다.` });
          } else {
            // 결제 실패 시 로직,
            Modal.error({
              content: "포인트 충전에 실패했습니다. 다시 시도해주세요.",
            });
          }
        },
      );
    }
  };
  return (
    <>
      <script
        type="text/javascript"
        src="https://code.jquery.co/jquery-1.12.4.min.js"
      ></script>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>

      <S.Wrapper>
        <S.Title>포인트 충전</S.Title>
        <S.ButtonWrapper>
          <S.Button onClick={onClickPayment(10000)}>10,000원</S.Button>
          <S.Button onClick={onClickPayment(50000)}>50,000원</S.Button>
          <S.Button onClick={onClickPayment(100000)}>100,000원</S.Button>
          <S.Button onClick={onClickPayment(200000)}>200,000원</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
};
