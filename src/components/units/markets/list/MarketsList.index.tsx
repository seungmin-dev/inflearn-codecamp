import * as S from "./MarketsList.styles";
import MarketListBody from "./body/MarketListBody.index";
import MarketListFooter from "./footer/MarketListFooter";
import MarketListHeader from "./header/MarketListHeader";

interface IMarketsProps {
  data: any;
}
export default function Markets(props: IMarketsProps): JSX.Element {
  return (
    <S.Wrapper>
      <MarketListHeader data={props.data} />
      <MarketListBody />
      {/* <MarketListFooter /> */}
    </S.Wrapper>
  );
}
