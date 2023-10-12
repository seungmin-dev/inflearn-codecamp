import * as S from "./MarketDetail.styles";
import MarketDetailHeader from "./header/MarketDetailHeader.index";
import MarketDetailBody from "./body/MarketDetailBody.index";
import MarketDetailFooter from "./footer/MarketDetailFooter.index";
import { useQueryFetchUseditem } from "../../../../commons/hooks/queries/useQueryFetchUseditem";
import { useQueryIdChecker } from "../../../../commons/hooks/cutoms/useQueryIdChecker";
import { Comments } from "../../../commons/comments/write";
import { MarketListComments } from "../../../commons/comments/marketList";

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
        useditemId={id}
        sellerId={data?.fetchUseditem.seller?._id}
        buyerId={data?.fetchUseditem.buyer?._id}
      />
      <Comments kind="market" />
      <MarketListComments sellerId={data?.fetchUseditem?.seller?._id} />
    </S.Wrapper>
  );
}
