import { useState } from "react";
import { useMutationUpdateBoardComment } from "../mutations/useMutationUpdateBoardComment";
import { Modal } from "antd";

interface ICommentFormProps {
  writer?: string;
  contents: string;
  rating?: number;
  password?: string;
  useditemQuestionId?: string;
}

export const useEditBoardComment = () => {
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [updateBoardComment] = useMutationUpdateBoardComment();

  const onValid = async (
    data: ICommentFormProps,
    e: React.ChangeEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    console.log("edit password: ", password);
    if (password) {
      try {
        await updateBoardComment({
          variables: {
            updateBoardCommentInput: {
              contents: data.contents,
              rating: data.rating,
            },
            boardCommentId,
            password,
          },
          update(cache, { data }) {
            cache.modify({
              id: cache.identify(data),
              fields: {
                fetchBoardComments: (prev) => {
                  return [data.updateBoardComment, ...prev];
                },
              },
            });
          },
        });
        Modal.success({ content: "댓글이 정상적으로 수정되었습니다." });
      } catch (error) {
        Modal.error({ content: error });
      } finally {
        setBoardCommentId("");
        setPassword("");
        setOpenEditModal(false);
      }
    }
  };
  const onClickOpenEditModal = (e) => {
    e.preventDefault();
    setOpenEditModal((prev) => !prev);
    setPassword("");
  };
  const onChangeEditPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(event.target.value);
  };
  return {
    onValid,
    boardCommentId,
    openEditModal,
    setBoardCommentId,
    onClickOpenEditModal,
    onChangeEditPassword,
  };
};
