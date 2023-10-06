import { BoardDetail } from "../../../src/components/units/board/detail/BoardDetail.index";
import CommentList from "../../../src/components/units/comments/list/CommentList.container";
import CommentWrite from "../../../src/components/units/comments/write/CommentWrite.index";

export default function DetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}
