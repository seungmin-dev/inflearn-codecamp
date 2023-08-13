import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function BoardListContainer(): JSX.Element {
  const [isLike, setIsLike] = useState(false);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: boardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickLike = (): void => {
    setIsLike((prev) => !prev);
  };

  return (
    <BoardListUI
      data={data}
      isLike={isLike}
      onClickLike={onClickLike}
      refetch={refetch}
      count={boardsCount?.fetchBoardsCount}
    />
  );
}
