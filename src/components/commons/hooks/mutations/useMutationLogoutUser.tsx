import { gql, useMutation } from "@apollo/client";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const useMutationLogoutUser = () => {
  const mutation = useMutation(LOGOUT_USER);

  return mutation;
};
