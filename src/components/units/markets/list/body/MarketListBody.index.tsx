import * as S from "./MarketListBody.styles";
import { useQueryFetchUsedItems } from "../../../../commons/hooks/queries/useQueryFetchUseditems";
import { useState } from "react";
import { MarketListBodySearch } from "./search/MarketListBodySearch.index";
import { MarketListBodyList } from "./MarketListBodyList.index";
import { ViewItemList } from "../../../viewItem/ViewItemList.index";

export default function MarketListBody(): JSX.Element {
  const { data, refetch, fetchMore } = useQueryFetchUsedItems();
  const [search, setSearch] = useState("");

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length ?? 10) },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <MarketListBodySearch refetch={refetch} setSearch={setSearch} />
        <MarketListBodyList
          data={data}
          onLoadMore={onLoadMore}
          search={search}
        />
      </S.LeftWrapper>
      <ViewItemList />
    </S.Wrapper>
  );
}
