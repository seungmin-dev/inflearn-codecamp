import { useRouter } from "next/router";
import { useQueryFetchUseditemQuestions } from "../../../../../commons/hooks/queries/useQueryFetchUseditemQuestions";
import InfiniteScroll from "react-infinite-scroller";
import type { IcommentMarketProps } from "../../../../commons/comments/Comments.types";
import { Comments } from "../../../../commons/comments/Comments.index";

export const MarketCommentsList = (): JSX.Element => {
  const router = useRouter();
  const { data, fetchMore } = useQueryFetchUseditemQuestions({
    useditemId: String(router.query.useditemId),
  });
  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };
  return (
    <div>
      {data?.fetchUseditemQuestions.length > 1 ? (
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore>
          {data?.fetchUseditemQuestions.map((el: IcommentMarketProps) => (
            <Comments key={el._id} data={el} kind="market" />
          ))}
        </InfiniteScroll>
      ) : (
        data?.fetchUseditemQuestions.map((el) => (
          <Comments key={el._id} data={el} kind="market" />
        ))
      )}
    </div>
  );
};
