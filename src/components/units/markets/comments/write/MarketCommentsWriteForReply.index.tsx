import * as S from "./MarketCommentsWriteForReply.styles";
import { useMutationCreateUseditemQuestionAnswer } from "../../../../commons/hooks/mutations/useMutationCreateUseditemQuestionAnswer";
import { useMutationUpdateUseditemQuestionAnswer } from "../../../../commons/hooks/mutations/useMutationUpdateUseditemQuestionAnswer";
import { useRef } from "react";
import type { Dispatch, SetStateAction } from "react";
import type {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../../../commons/types/generated/types";
import { Modal } from "antd";

interface IMarketCommentsWriteForReplyProps {
  questionId: string;
  data?: IUseditemQuestionAnswer | IUseditemQuestion;
  isEdit?: boolean;
  isReplying?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  setIsReplying?: Dispatch<SetStateAction<boolean>>;
}

export const MarketCommentsWriteForReply = (
  props: IMarketCommentsWriteForReplyProps,
): JSX.Element => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [useCreateReply] = useMutationCreateUseditemQuestionAnswer();
  const [useEditReply] = useMutationUpdateUseditemQuestionAnswer();

  const onClickEdit = async (): Promise<void> => {
    try {
      await useEditReply({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: textareaRef.current.value,
          },
          useditemQuestionAnswerId: props.data._id,
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
      textareaRef.current.value = "";
      props.setIsEdit(false);
      Modal.success({ content: "댓글이 정상적으로 수정되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickCreate = async (): Promise<void> => {
    console.log(textareaRef.current.value);
    try {
      await useCreateReply({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: textareaRef.current.value,
          },
          useditemQuestionId: props.questionId,
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
      textareaRef.current.value = "";
      props.setIsReplying(false);
      Modal.success({ content: "댓글이 정상적으로 등록되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <S.ReplyWrapper>
      {props.isReplying ? <S.ReplyIcon /> : ""}
      <S.TextWrapper>
        <S.TextArea
          ref={textareaRef}
          maxLength={100}
          placeholder={"답글을 입력해주세요."}
          defaultValue={props.data?.contents}
        ></S.TextArea>
        <S.Bottom>
          <S.Length>{textareaRef.current?.value.length} / 100</S.Length>
          {props.isEdit ? (
            <S.Button onClick={onClickEdit}>수정하기</S.Button>
          ) : (
            <S.Button onClick={onClickCreate}>답글등록</S.Button>
          )}
        </S.Bottom>
      </S.TextWrapper>
    </S.ReplyWrapper>
  );
};
