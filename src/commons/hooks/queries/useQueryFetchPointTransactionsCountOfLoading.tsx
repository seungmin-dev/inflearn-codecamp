import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from "../../types/generated/types";

const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const useQueryFetchPointTransactionsOfLoading = () => {
  const query = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  return query;
};
