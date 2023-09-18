import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
      user {
        _id
        email
        name
        picture
      }
    }
  }
`;
export const useQueryFetchBoard = (variables: IQueryFetchBoardArgs) => {
  const query = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: variables.boardId },
    },
  );

  return query;
};
