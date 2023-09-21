import { useQueryFetchUseditem } from "../../../../src/commons/hooks/queries/useQueryFetchUseditem";
import MarketNew from "../../../../src/components/units/markets/new/MarketNew.index";
import { useQueryIdChecker } from "../../../../src/commons/hooks/cutoms/useQueryIdChecker";

export default function MarketDetailEdit(): JSX.Element {
  const { id } = useQueryIdChecker("useditemId");
  const { data } = useQueryFetchUseditem({
    useditemId: id,
  });
  return <MarketNew isEdit={true} data={data} />;
}
