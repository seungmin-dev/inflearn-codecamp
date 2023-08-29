import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";

const FETCH_USEDITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      seller {
        _id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const useQueryFetchUseditemsIPicked = () => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICKED);

  return query;
};
