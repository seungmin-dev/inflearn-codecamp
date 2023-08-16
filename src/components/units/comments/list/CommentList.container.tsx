import CommentListUI from "./CommentList.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";
import type { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { DELETE_BOARD_COMMENT } from "../write/CommentWrite.queries";

export default function CommentList(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [password, setPassword] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLImageElement>,
  ): void => {
    setBoardCommentId(event.currentTarget.id);
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(event.target.value);
  };

  return (
    <>
      <CommentListUI
        data={data}
        onLoadMore={onLoadMore}
        onClickDelete={onClickDelete}
        isOpenDeleteModal={isOpenDeleteModal}
        onClickOpenDeleteModal={onClickOpenDeleteModal}
        onChangeDeletePassword={onChangeDeletePassword}
      />
    </>
  );
}
