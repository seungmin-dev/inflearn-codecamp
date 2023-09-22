import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../types/generated/types";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      rating
      user {
        _id
        name
        picture
      }
      createdAt
      updatedAt
    }
  }
`;
export const useQueryFetchBoardComments = (
  props: IQueryFetchBoardCommentsArgs,
) => {
  const query = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, { variables: { boardId: props.boardId } });

  return query;
};
