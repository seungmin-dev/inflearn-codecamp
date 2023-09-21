import type { ApolloQueryResult } from "@apollo/client";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

export interface IPaginationProps {
  count: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}
export interface IPaginationUIProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
