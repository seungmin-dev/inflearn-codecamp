import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../types/generated/types";

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;
export const useQueryFetchBoardsCount = () => {
  const query = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  return query;
};
