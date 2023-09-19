import { useSearchBar } from "../../../commons/hooks/cutoms/useSearchBar";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";
import BoardListBody from "./body/BoardListBody.index";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import Pagination from "../../../commons/paginations/Pagination.index";
import { usePagination } from "../../../commons/hooks/cutoms/usePagination";
import { BoardListHeader } from "./header/BoardListHeader.index";
import { BoardListFooter } from "./footer/BoardListFooter.index";
import styled from "@emotion/styled";
import type { IBoard } from "../../../../commons/types/generated/types";

interface IBoardListInterface {
  data: IBoard[];
}
export const Container = styled.div`
  width: 1200px;
  margin: 20px auto;
`;
export default function BoardList(props: IBoardListInterface): JSX.Element {
  const { data, refetch } = useQueryFetchBoards();
  const { data: boardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();

  const { keyword, onChangeSearch } = useSearchBar({
    refetch,
    refetchBoardsCount,
  });
  const pagenationArgs = usePagination({
    refetch,
    count: boardsCount?.fetchBoardsCount,
  });

  return (
    <Container>
      <BoardListHeader data={props.data} />
      <BoardListBody
        data={data}
        keyword={keyword}
        onChangeSearch={onChangeSearch}
      />
      <BoardListFooter>
        <Pagination {...pagenationArgs} />
      </BoardListFooter>
    </Container>
  );
}
