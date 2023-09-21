import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../types/generated/types";

const FETCH_USEDITEMS_ISOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        _id
        name
        picture
      }
      soldAt
      createdAt
      updatedAt
    }
  }
`;
export const useQueryFetchUseditemsISold = () => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USEDITEMS_ISOLD);

  return query;
};
