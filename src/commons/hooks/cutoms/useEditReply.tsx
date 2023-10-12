import { useState } from "react";
import { useMutationUpdateUseditemQuestionAnswer } from "../mutations/useMutationUpdateUseditemQuestionAnswer";
import { Modal } from "antd";

interface ICommentFormProps {
  contents: string;
  useditemQuestionId?: string;
}

export const useEditReply = () => {
  const [commentId, setCommentId] = useState("");
  const [useEditReply] = useMutationUpdateUseditemQuestionAnswer();

  const onClickEdit = (id: string) => (): void => {
    setCommentId(id);
  };
  const onValid = async (data: ICommentFormProps) => {
    try {
      await useEditReply({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
          useditemQuestionAnswerId: commentId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [data.updateUseditemQuestionAnswer, ...prev];
              },
            },
          });
        },
      });
      Modal.success({ content: "답댓글이 정상적으로 수정되었습니다." });
    } catch (error) {
      Modal.error({ content: error });
    } finally {
      setCommentId("");
    }
  };

  return { commentId, onClickEdit, onValid };
};
