import * as S from "./MarketDetail.styles";
import MarketDetailHeader from "./header/MarketDetailHeader.index";
import MarketDetailBody from "./body/MarketDetailBody.index";
import MarketDetailFooter from "./footer/MarketDetailFooter.index";
import { useQueryFetchUseditem } from "../../../commons/hooks/queries/useQueryFetchUseditem";
import { useQueryIdChecker } from "../../../commons/hooks/cutoms/useQueryIdChecker";

export default function MarketDetail(): JSX.Element {
  const { id } = useQueryIdChecker("useditemId");
  const { data } = useQueryFetchUseditem({
    useditemId: id,
  });

  return (
    <S.Wrapper>
      <MarketDetailHeader data={data} />
      <MarketDetailBody data={data} />
      <MarketDetailFooter
        sellerEmail={data?.fetchUseditem.seller.email}
        useditemId={id}
      />
    </S.Wrapper>
  );
}
