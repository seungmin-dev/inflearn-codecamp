import { useMutationDeleteBoardComment } from "../mutations/useMutationDeleteBoardComment";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../queries/useQueryFetchBoardComments";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useMutationDeleteUseditemQuestion } from "../mutations/useMutationDeleteUseditemQuestion";

interface DeleteCommentArgs {
  kind: string;
}
export const useDeleteComment = ({ kind }: DeleteCommentArgs) => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [commentId, setCommentId] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteBoardComment] = useMutationDeleteBoardComment();
  const [deleteUseditemComment] = useMutationDeleteUseditemQuestion();

  const onClickDelete = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    try {
      if (kind === "board") {
        await deleteBoardComment({
          variables: {
            password,
            boardCommentId: commentId,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
      }
      setOpenDeleteModal(false);
      Modal.success({ content: "댓글이 정상적으로 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickOpenDeleteModal = () => {
    setOpenDeleteModal((prev) => !prev);
    setPassword("");
  };
  const onChangeDeletePassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(event.target.value);
  };
  const onClickDeleteButton = (id: string) => (): void => {
    setCommentId(id);
    if (kind === "board") {
      setOpenDeleteModal((prev) => !prev);
      setPassword("");
    } else {
    }
  };
  const onClickMarketDelete =
    (id: string) =>
    async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
      try {
        await deleteUseditemComment({
          variables: { useditemQuestionId: id },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestions: (prev, { readField }) => {
                  const deleteId = data.deleteUseditemQuestion;
                  const filteredPrev = prev.filter(
                    (el) => readField("_id", el) !== deleteId,
                  );
                  return [...filteredPrev];
                },
              },
            });
          },
        });
        Modal.success({ content: "댓글이 정상적으로 삭제되었습니다." });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    };

  return {
    onClickDelete,
    openDeleteModal,
    onClickOpenDeleteModal,
    onChangeDeletePassword,
    onClickDeleteButton,
    onClickMarketDelete,
  };
};
