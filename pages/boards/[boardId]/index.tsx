import BoardDetailContainer from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentWrite from "../../../src/components/units/comments/write/CommentWrite.container";
import CommentList from "../../../src/components/units/comments/list/CommentList.container";

export default function DetailPage(): JSX.Element {
  return (
    <>
      <BoardDetailContainer />
      <CommentWrite />
      <CommentList />
    </>
  );
}
