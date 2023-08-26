import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";

const UPDATE_USEDITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        _id
        email
        name
        picture
      }
      updatedAt
    }
  }
`;

export const useMutationUpdateUseditemQuestion = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION);

  return mutation;
};
