import styled from "@emotion/styled";
import { MarketCommentsList } from "./list/MarketCommentsList.index";
import { MarketCommentsWrite } from "./write/MarketCommentsWrite.index";

const CommentsWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #bdbdbd;
  padding-top: 50px;
`;
export const MarketComments = (): JSX.Element => {
  return (
    <CommentsWrapper>
      <MarketCommentsWrite />
      <MarketCommentsList />
    </CommentsWrapper>
  );
};
