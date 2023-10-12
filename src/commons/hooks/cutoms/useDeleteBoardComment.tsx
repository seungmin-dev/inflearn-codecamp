import { useMutationDeleteBoardComment } from "../mutations/useMutationDeleteBoardComment";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../queries/useQueryFetchBoardComments";
import { useRouter } from "next/router";
import { Modal } from "antd";

export const useDeleteBoardComment = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteBoardComment] = useMutationDeleteBoardComment();

  const onClickDelete = async (
    event: React.MouseEvent<HTMLButtonElement>,
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
      setOpenDeleteModal(false);

      Modal.success({ content: "댓글이 정상적으로 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
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
    setBoardCommentId(id);
    setOpenDeleteModal((prev) => !prev);
    setPassword("");
  };

  return {
    onClickDelete,
    openDeleteModal,
    onClickOpenDeleteModal,
    onChangeDeletePassword,
    onClickDeleteButton,
  };
};
