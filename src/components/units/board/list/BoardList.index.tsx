import Searchbars from "../../../commons/searchbars/Searchbars.index";
import { useSearchBar } from "../../../commons/hooks/cutoms/useSearchBar";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";
import BoardListBody from "./body/BoardListBody.index";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import Pagination from "../../../commons/paginations/Pagination.index";
import { usePagination } from "../../../commons/hooks/cutoms/usePagination";
import { BoardListHeader } from "./header/BoardListHeader.index";
import { BoardListFooter } from "./footer/BoardListFooter.index";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  padding: 20px;
  margin: 20px auto;
  padding: 20px;
`;
export default function BoardList(): JSX.Element {
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
      <BoardListHeader>
        <Searchbars onChangeSearch={onChangeSearch} />
      </BoardListHeader>
      <BoardListBody data={data} keyword={keyword} />
      <BoardListFooter>
        <Pagination {...pagenationArgs} />
      </BoardListFooter>
    </Container>
  );
}
