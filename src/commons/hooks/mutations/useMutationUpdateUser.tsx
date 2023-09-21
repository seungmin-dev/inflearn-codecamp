import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../types/generated/types";

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      email
      name
      picture
    }
  }
`;

export const useMutationUpdateUser = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  return mutation;
};
