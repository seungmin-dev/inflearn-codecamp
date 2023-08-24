import Link from "next/link";
import * as S from "./MarketDetailFooter.styles";
import { useRecoilState } from "recoil";
import { userEmailState } from "../../../../commons/stores";
interface IMarketDetailFooterProps {
  sellerEmail: string;
  useditemId: string;
}
export default function MarketDetailFooter(
  props: IMarketDetailFooterProps,
): JSX.Element {
  const [userEmail] = useRecoilState(userEmailState);
  return (
    <S.Wrapper>
      <Link href="/markets">
        <a>
          <S.ListButton>목록으로</S.ListButton>
        </a>
      </Link>
      {userEmail === props.sellerEmail ? (
        <Link href={`/markets/${props.useditemId}/edit`}>
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
