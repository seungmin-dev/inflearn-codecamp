import { useRouter } from "next/router";
import { useQueryFetchBoardComments } from "../queries/useQueryFetchBoardComments";
import { useQueryFetchUseditemQuestions } from "../queries/useQueryFetchUseditemQuestions";

interface FetchCommentArgs {
  kind: string;
}

export const useFetchComment = ({ kind }: FetchCommentArgs) => {
  const router = useRouter();

  const { data } =
    kind === "board"
      ? useQueryFetchBoardComments({
          boardId: router.query.boardId as string,
        })
      : useQueryFetchUseditemQuestions({
          useditemId: router.query.useditemId as string,
        });
  return { data };
};
