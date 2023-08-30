import { gql, useQuery } from "@apollo/client";

const FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING = gql`
  query fetchPointTransactionsCountOfBuying {
    fetchPointTransactionsCountOfBuying
  }
`;
const FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING = gql`
  query fetchPointTransactionsCountOfSelling {
    fetchPointTransactionsCountOfSelling
  }
`;
const FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING = gql`
  query fetchPointTransactionsCountOfLoading {
    fetchPointTransactionsCountOfLoading
  }
`;
export const useQueryFetchPointTransactionsCountOfBuying = () => {
  const query = useQuery(FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING);

  return query;
};
export const useQueryFetchPointTransactionsCountOfSelling = () => {
  const query = useQuery(FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING);

  return query;
};
export const useQueryFetchPointTransactionsCountOfLoading = () => {
  const query = useQuery(FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING);

  return query;
};
