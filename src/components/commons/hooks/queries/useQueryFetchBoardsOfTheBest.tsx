import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

const FETCH_BOARDS_OF_THE_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      images
      user {
        _id
        email
        name
        picture
      }
      createdAt
      updatedAt
    }
  }
`;

export const UseQueryFetchBoardsOfTheBest = () => {
  const query = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST,
  );

  return query;
};
