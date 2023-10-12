import { Dispatch, SetStateAction } from "react";
import { useMutationCreateUseditemQuestionAnswer } from "../mutations/useMutationCreateUseditemQuestionAnswer";
import { Modal } from "antd";

interface ICommentFormProps {
  contents: string;
  useditemQuestionId?: string;
}

interface IReplyProps {
  useditemQuestionId?: string;
  setReplyId: Dispatch<SetStateAction<string>>;
}
export const useReply = ({ useditemQuestionId, setReplyId }: IReplyProps) => {
  const [createReply] = useMutationCreateUseditemQuestionAnswer();

  const onValid = async (data: ICommentFormProps) => {
    try {
      await createReply({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
          useditemQuestionId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [data.createUseditemQuestionAnswer, ...prev];
              },
            },
          });
        },
      });
      Modal.success({ content: "댓글이 정상적으로 등록되었습니다." });
    } catch (error) {
      Modal.error({ content: error });
    } finally {
      setReplyId("");
    }
  };

  return { onValid };
};
