import styled from "@emotion/styled";
import { BestBoardList } from "../best/BestBoardList.index";
import type { IBoard } from "../../../../../commons/types/generated/types";
interface IBoardListHeaderProps {
  data: IBoard[];
}
export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
`;
export const Title = styled.h1`
  text-align: center;
  padding-bottom: 50px;
`;

export const BoardListHeader = (props: IBoardListHeaderProps): JSX.Element => {
  return (
    <Wrapper>
      <Title>베스트 게시글</Title>
      <BestBoardList data={props.data} />
    </Wrapper>
  );
};
