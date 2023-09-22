import { BoardComments } from "../../../src/components/units/board/comments/BoardComments.index";
import { BoardDetail } from "../../../src/components/units/board/detail/BoardDetail.index";

export default function DetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <BoardComments />
    </>
  );
}
