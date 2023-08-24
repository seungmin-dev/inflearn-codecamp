import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const Button = styled.a`
  display: block;
  width: 120px;
  border: 1px solid #000;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
`;

export default function MarketListFooter(): JSX.Element {
  return (
    <Wrapper>
      <Link href="/markets/new">
        <Button>상품 등록하기</Button>
      </Link>
    </Wrapper>
  );
}
