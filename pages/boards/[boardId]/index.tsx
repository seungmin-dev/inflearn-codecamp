import CommentWrite from "../../../src/components/units/comments/write/CommentWrite.container";
import CommentList from "../../../src/components/units/comments/list/CommentList.container";
import { BoardDetail } from "../../../src/components/units/board/detail/BoardDetail.index";

export default function DetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}
