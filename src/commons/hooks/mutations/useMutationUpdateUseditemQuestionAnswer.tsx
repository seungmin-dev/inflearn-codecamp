import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../types/generated/types";

const UPDATE_USEDITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
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

export const useMutationUpdateUseditemQuestionAnswer = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USEDITEM_QUESTION_ANSWER);

  return mutation;
};
