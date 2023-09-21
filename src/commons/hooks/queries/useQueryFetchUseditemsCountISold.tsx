import { gql, useQuery } from "@apollo/client";

const FETCH_USEDITEMS_COUNT_ISOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;

export const useQueryFetchUseditemsCountISold = () => {
  const query = useQuery(FETCH_USEDITEMS_COUNT_ISOLD);

  return query;
};
