import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationResetUserPasswordArgs,
} from "../../../../commons/types/generated/types";

const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export const useMutationResetUserPassword = () => {
  const mutation = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD);

  return mutation;
};
