import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../types/generated/types";

const CREATE_USEDITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      user {
        _id
        name
        email
        picture
      }
      createdAt
    }
  }
`;

export const useMutationCreateUseditemQuestion = () => {
  const mutation = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);
  return mutation;
};
