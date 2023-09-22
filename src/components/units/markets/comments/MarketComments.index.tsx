import { MarketCommentsList } from "./list/MarketCommentsList.index";
import { MarketCommentsWrite } from "./write/MarketCommentsWrite.index";

export const MarketComments = (): JSX.Element => {
  return (
    <>
      <MarketCommentsWrite />
      <MarketCommentsList />
    </>
  );
};
