import MarketListBest from "../best/MarketListBest.index";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;
interface IMarketListHeaderProps {
  data: any;
}
export default function MarketListHeader(
  props: IMarketListHeaderProps,
): JSX.Element {
  return (
    <Wrapper>
      <Title>베스트 상품</Title>
      <MarketListBest data={props.data} />
    </Wrapper>
  );
}
