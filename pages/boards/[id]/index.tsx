import BoardDetailContainer from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentsContainer from "../../../src/components/units/comments/Comments.container";

export default function DetailPage(): JSX.Element {
  return (
    <>
      <BoardDetailContainer />
      <CommentsContainer />
    </>
  );
}
