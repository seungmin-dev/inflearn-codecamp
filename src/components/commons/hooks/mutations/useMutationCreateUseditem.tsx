import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";

const CREATE_USEDITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      createdAt
    }
  }
`;

export const useMutationCraeteUseditem = () => {
  const mutation = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  return mutation;
};
