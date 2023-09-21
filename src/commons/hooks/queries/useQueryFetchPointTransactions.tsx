import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../types/generated/types";

const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
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

export const useQueryFetchPointTransactions = () => {
  const query = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS);

  return query;
};
