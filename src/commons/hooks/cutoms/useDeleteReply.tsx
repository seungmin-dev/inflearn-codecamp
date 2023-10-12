import { Modal } from "antd";
import { useMutationDeleteUseditemQuestionAnswer } from "../mutations/useMutationDeleteUseditemQuestionAnswer";

export const useDeleteReply = () => {
  const [useDeleteReply] = useMutationDeleteUseditemQuestionAnswer();

  const onClickDelete =
    (useditemQuestionAnswerId: string) => async (): Promise<void> => {
      try {
        await useDeleteReply({
          variables: {
            useditemQuestionAnswerId,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestionAnswers: (prev, { readField }) => {
                  const deleteId = data.deleteUseditemQuestionAnswer;
                  const filteredPrev = prev.filter(
                    (el) => readField("_id", el) !== deleteId,
                  );
                  return [...filteredPrev];
                },
              },
            });
          },
        });
        Modal.success({ content: "답댓글이 정상적으로 삭제되었습니다." });
      } catch (error) {
        Modal.error({ content: error });
      }
    };
  return { onClickDelete };
};
