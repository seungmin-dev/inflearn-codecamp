import Link from "next/link";
import * as S from "./MarketDetailFooter.styles";

export default function MarketDetailFooter(): JSX.Element {
  return (
    <S.Wrapper>
      <Link href="/markets">
        <a>
          <S.ListButton>목록으로</S.ListButton>
        </a>
      </Link>
      <S.BuyButton>구매하기</S.BuyButton>
    </S.Wrapper>
  );
}
