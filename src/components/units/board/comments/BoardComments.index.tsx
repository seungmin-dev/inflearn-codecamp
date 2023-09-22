import { BoardCommentsList } from "./list/BoardCommentsList.index";
import { BoardCommentsWrite } from "./write/BoardCommentsWrite.index";

export const BoardComments = (): JSX.Element => {
  return (
    <>
      <BoardCommentsWrite />
      <BoardCommentsList />
    </>
  );
};
