import styled from "@emotion/styled";
import BestBoardList from "../best/BestBoardList.index";

interface IBoardListHeaderProps {
  children: JSX.Element;
}

export const Title = styled.h2`
  text-align: center;
  padding-bottom: 40px;
`;

export const BoardListHeader = (props: IBoardListHeaderProps): JSX.Element => {
  return (
    <div>
      <Title>베스트 게시글</Title>
      <BestBoardList />
      {props.children}
    </div>
  );
};
