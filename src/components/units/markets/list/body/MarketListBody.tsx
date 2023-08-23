import { useQueryFetchUsedItems } from "../../../../commons/hooks/queries/useQueryFetchUsedItems";

export default function MarketListBody(): JSX.Element {
  const { data } = useQueryFetchUsedItems();
  console.log(data);
  return <></>;
}
