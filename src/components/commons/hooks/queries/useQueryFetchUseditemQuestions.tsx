import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";

const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      useditem {
        _id
      }
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

export const useQueryFetchUseditemQuestions = (
  variables: IQueryFetchUseditemQuestionsArgs,
): QueryResult<
  Pick<IQuery, "fetchUseditemQuestions">,
  IQueryFetchUseditemQuestionsArgs
> => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: variables.useditemId,
    },
  });
  return query;
};
