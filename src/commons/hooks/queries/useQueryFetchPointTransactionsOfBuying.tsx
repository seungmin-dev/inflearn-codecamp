import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../types/generated/types";

const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      useditem {
        _id
        name
        price
        seller {
          _id
          # name
          # email
        }
        buyer {
          _id
          # name
          # email
        }
        soldAt
      }
      createdAt
    }
  }
`;

export const useQueryFetchPointTransactionsOfBuying = () => {
  const query = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  return query;
};
