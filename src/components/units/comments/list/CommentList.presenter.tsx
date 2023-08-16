import CommentListUIItem from "./CommentList.presenterItem";
import * as S from "./CommentList.styles";
import type { ICommentListProps } from "./CommentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function CommentListUI(props: ICommentListProps): JSX.Element {
  return (
    <S.CommentsWrapper>
      {props.data?.fetchBoardComments.length > 1 ? (
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.data?.fetchBoardComments?.map((item) => (
            <CommentListUIItem item={item} key={item._id} />
          ))}
        </InfiniteScroll>
      ) : (
        <>
          {props.data?.fetchBoardComments?.map((item) => (
            <CommentListUIItem item={item} key={item._id} />
          ))}
        </>
      )}
    </S.CommentsWrapper>
  );
}
