import styled from "@emotion/styled";
import { MarketCommentsList } from "./list/MarketCommentsList.index";
import { EditOutlined } from "@ant-design/icons";
import { MarketCommentsWrite } from "./write/MarketCommentsWrite.index";

const CommentsWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #bdbdbd;
  padding-top: 50px;
`;
const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 40px;
`;
const WriteIcon = styled(EditOutlined)`
  font-size: 20px;
  color: #ffd600;
  margin-right: 10px;
`;

interface IMarketCommentsProps {
  useditemId: string;
}
export const MarketComments = (props: IMarketCommentsProps): JSX.Element => {
  return (
    <CommentsWrapper>
      <Title>
        <WriteIcon />
        문의하기
      </Title>
      <MarketCommentsWrite useditemId={props.useditemId} />
      <MarketCommentsList />
    </CommentsWrapper>
  );
};
