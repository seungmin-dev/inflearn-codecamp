import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;

export const useQueryFetchUserLoggedIn = () => {
  const query =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return query;
};
