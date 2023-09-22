import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../types/generated/types";

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;

export const useMutationCreateBoardComment = () => {
  const mutation = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  return mutation;
};
