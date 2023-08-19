import type { ApolloQueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import type { ChangeEvent } from "react";

export interface IBoardListUIProps {
  isLike: boolean;
  onClickLike: () => void;
  data?: Pick<IQuery, "fetchBoards">;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
}
