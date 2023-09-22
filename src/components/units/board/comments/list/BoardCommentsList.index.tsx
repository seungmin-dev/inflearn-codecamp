import { useRouter } from "next/router";
import { useQueryFetchBoardComments } from "../../../../../commons/hooks/queries/useQueryFetchBoardComments";
import InfiniteScroll from "react-infinite-scroller";
import { Comments } from "../../../../commons/comments/Comments.index";
import type { IcommentBoardProps } from "../../../../commons/comments/Comments.types";

export const BoardCommentsList = (): JSX.Element => {
  const router = useRouter();
  const { data, fetchMore } = useQueryFetchBoardComments({
    boardId: String(router.query.boardId),
    page: 0,
  });

  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <div>
      {data?.fetchBoardComments.length > 1 ? (
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore>
          {data?.fetchBoardComments.map((el: IcommentBoardProps) => (
            <Comments key={el._id} data={el} kind="board" />
          ))}
        </InfiniteScroll>
      ) : (
        data?.fetchBoardComments.map((el: IcommentBoardProps) => (
          <Comments key={el._id} data={el} kind="board" />
        ))
      )}
    </div>
  );
};
