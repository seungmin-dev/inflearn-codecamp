import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../types/generated/types";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
      buyer {
        _id
        email
        name
        picture
      }
      seller {
        _id
        email
        name
        picture
      }
      soldAt
      createdAt
      updatedAt
    }
  }
`;

export const useQueryFetchUseditem = (
  variables: IQueryFetchUseditemArgs,
): QueryResult<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs> => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: variables.useditemId },
  });
  return query;
};
