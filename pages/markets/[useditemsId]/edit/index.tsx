import { useQueryFetchUseditem } from "../../../../src/components/commons/hooks/queries/useQueryFetchUseditem";
import MarketNew from "../../../../src/components/units/markets/new/MarketNew.index";
import { useQueryIdChecker } from "../../../../src/components/commons/hooks/cutoms/useQueryIdChecker";

export default function MarketDetailEdit(): JSX.Element {
  const { id } = useQueryIdChecker("useditemsId");
  const { data } = useQueryFetchUseditem({
    useditemId: id,
  });
  return <MarketNew isEdit={true} data={data} />;
}
