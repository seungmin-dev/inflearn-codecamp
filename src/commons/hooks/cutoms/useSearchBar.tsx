import type { ChangeEvent } from "react";
import { useState } from "react";
import _ from "lodash";
import type { ApolloQueryResult } from "@apollo/client";
import type { IQuery } from "../../types/generated/types";
interface IUseSearchbarArgs {
  refetch: (
    variables?: Partial<any> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  refetchBoardsCount?: (
    variables?: Partial<any> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}
export const useSearchBar = (args: IUseSearchbarArgs) => {
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((value) => {
    void args.refetch({ search: value, page: 1 });
    if (args.refetchBoardsCount)
      void args.refetchBoardsCount({ search: value });
    setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };
  return {
    keyword,
    onChangeSearch,
  };
};
