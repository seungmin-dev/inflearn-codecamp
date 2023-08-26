import Link from "next/link";
import * as S from "./MarketDetailFooter.styles";
import { useRecoilState } from "recoil";
import { userIdState } from "../../../../commons/stores";
interface IMarketDetailFooterProps {
  sellerId: string;
  useditemId: string;
}
export default function MarketDetailFooter(
  props: IMarketDetailFooterProps,
): JSX.Element {
  const [userId] = useRecoilState(userIdState);
  return (
    <S.Wrapper>
      <Link href="/markets">
        <a>
          <S.ListButton>목록으로</S.ListButton>
        </a>
      </Link>
      {userId === props.sellerId ? (
        <Link href={`/markets/${props?.useditemId}/edit`}>
          <a>
            <S.BuyButton>수정하기</S.BuyButton>
          </a>
        </Link>
      ) : (
        <S.BuyButton>구매하기</S.BuyButton>
      )}
    </S.Wrapper>
  );
}
