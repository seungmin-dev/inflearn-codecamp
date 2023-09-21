import * as S from "./MarketListBody.styles";
import { useQueryFetchUsedItems } from "../../../../../commons/hooks/queries/useQueryFetchUseditems";
import { MarketListBodySearch } from "./search/MarketListBodySearch.index";
import { MarketListBodyList } from "./MarketListBodyList.index";
import { ViewItemList } from "../../../viewItem/ViewItemList.index";
import { useSearchBar } from "../../../../../commons/hooks/cutoms/useSearchBar";

export default function MarketListBody(): JSX.Element {
  const { data, refetch, fetchMore } = useQueryFetchUsedItems();
  const { keyword, onChangeSearch } = useSearchBar({
    refetch,
  });

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
        <MarketListBodySearch
          refetch={refetch}
          onChangeSearch={onChangeSearch}
        />
        <MarketListBodyList
          data={data}
          onLoadMore={onLoadMore}
          keyword={keyword}
        />
      </S.LeftWrapper>
      <ViewItemList />
    </S.Wrapper>
  );
}
