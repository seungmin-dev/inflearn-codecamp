import MarketListBest from "../best/MarketListBest.index";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1200px;
  margin: 50px auto;
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;
export default function MarketListHeader(): JSX.Element {
  return (
    <Wrapper>
      <Title>베스트 상품</Title>
      <MarketListBest />
    </Wrapper>
  );
}
