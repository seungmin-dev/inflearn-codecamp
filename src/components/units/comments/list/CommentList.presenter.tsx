import CommentListUIItem from "./CommentList.presenterItem";
import * as S from "./CommentList.styles";
import type { ICommentListProps } from "./CommentList.types";

export default function CommentListUI(props: ICommentListProps): JSX.Element {
  return (
    <S.CommentsWrapper>
      {props.data?.fetchBoardComments?.map((item) => (
        <CommentListUIItem item={item} key={item._id} />
      ))}
    </S.CommentsWrapper>
  );
}
