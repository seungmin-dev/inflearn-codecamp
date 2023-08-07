import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $boardId: ID!) {
    updateBoard(updateBoardInput: $updateBoardInput, boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
