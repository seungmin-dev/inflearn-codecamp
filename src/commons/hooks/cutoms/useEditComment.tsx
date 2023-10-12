import { useState } from "react";
import { useMutationUpdateBoardComment } from "../mutations/useMutationUpdateBoardComment";
import { Modal } from "antd";
import { useMutationUpdateUseditemQuestion } from "../mutations/useMutationUpdateUseditemQuestion";

interface ICommentFormProps {
  writer?: string;
  contents: string;
  rating?: number;
  password?: string;
  useditemQuestionId?: string;
}

interface EditCommentArgs {
  kind: string;
}
export const useEditComment = ({ kind }: EditCommentArgs) => {
  const [password, setPassword] = useState("");
  const [commentId, setCommentId] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [updateBoardComment] = useMutationUpdateBoardComment();
  const [updateUseditemComment] = useMutationUpdateUseditemQuestion();

  const onValid = async (data: ICommentFormProps) => {
    try {
      if (kind === "board") {
        if (password) {
          await updateBoardComment({
            variables: {
              updateBoardCommentInput: {
                contents: data.contents,
                rating: data.rating,
              },
              boardCommentId: commentId,
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
        }
      } else {
        await updateUseditemComment({
          variables: {
            updateUseditemQuestionInput: {
              contents: data.contents,
            },
            useditemQuestionId: commentId,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestions: (prev) => {
                  return [data.updateUseditemQuestion, ...prev];
                },
              },
            });
          },
        });
      }
      Modal.success({ content: "댓글이 정상적으로 수정되었습니다." });
    } catch (error) {
      Modal.error({ content: error });
    } finally {
      setCommentId("");
      setPassword("");
      setOpenEditModal(false);
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
    commentId,
    openEditModal,
    setCommentId,
    onClickOpenEditModal,
    onChangeEditPassword,
  };
};
