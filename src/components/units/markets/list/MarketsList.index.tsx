import * as S from "./MarketsList.styles";
import MarketListBody from "./body/MarketListBody.index";
import MarketListFooter from "./footer/MarketListFooter";
import MarketListHeader from "./header/MarketListHeader";

export default function Markets(): JSX.Element {
  return (
    <S.Wrapper>
      <MarketListHeader />
      <MarketListBody />
      <MarketListFooter />
    </S.Wrapper>
  );
}
