import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function BoardListContainer(): JSX.Element {
  const [isLike, setIsLike] = useState(false);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );
  const onClickLike = (): void => {
    setIsLike((prev) => !prev);
  };

  return <BoardListUI data={data} isLike={isLike} onClickLike={onClickLike} />;
}
