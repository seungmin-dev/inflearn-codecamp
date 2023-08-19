import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import type { ChangeEvent } from "react";
import { useState } from "react";
import _ from "lodash";

export default function BoardListContainer(): JSX.Element {
  const [isLike, setIsLike] = useState(false);
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: boardsCount, refetch: boardsCountRefetch } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickLike = (): void => {
    setIsLike((prev) => !prev);
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    void boardsCountRefetch({ search: value });
    setKeyword(value);
  }, 500);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <BoardListUI
      data={data}
      isLike={isLike}
      onClickLike={onClickLike}
      refetch={refetch}
      count={boardsCount?.fetchBoardsCount}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
    />
  );
}
