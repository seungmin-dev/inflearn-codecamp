import { gql, useQuery } from "@apollo/client";

const FETCH_USEDITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;

export const useQueryFetchUseditemsCountIPicked = () => {
  const query = useQuery(FETCH_USEDITEMS_COUNT_IPICKED);

  return query;
};
