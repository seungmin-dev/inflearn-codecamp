import { BoardComments } from "../../../src/components/units/board/comments/BoardComments.index";
import { BoardDetail } from "../../../src/components/units/board/detail/BoardDetail.index";
import CommentList from "../../../src/components/units/comments/list/CommentList.container";
import CommentWrite from "../../../src/components/units/comments/write/CommentWrite.container";

export default function DetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      {/* <BoardComments /> */}
      <CommentWrite />
      <CommentList />
    </>
  );
}
