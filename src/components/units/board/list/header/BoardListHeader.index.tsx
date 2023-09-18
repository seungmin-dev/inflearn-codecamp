import styled from "@emotion/styled";
import { BestBoardList } from "../best/BestBoardList.index";
import type { IBoard } from "../../../../../commons/types/generated/types";
interface IBoardListHeaderProps {
  data: IBoard[];
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
      <BestBoardList data={props.data} />
      {props.children}
    </div>
  );
};
