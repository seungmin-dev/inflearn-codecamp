import { useRef } from "react";
import type { Dispatch, SetStateAction } from "react";
import * as S from "./MarketCommentsWrite.styles";
import { useMutationCreateUseditemQuestion } from "../../../../commons/hooks/mutations/useMutationCreateUseditemQuestion";
import { useMutationUpdateUseditemQuestion } from "../../../../commons/hooks/mutations/useMutationUpdateUseditemQuestion";
import type {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../../../commons/types/generated/types";
import { Modal } from "antd";
interface IMarketCommentsWriteProps {
  useditemId?: string;
  questionId?: string;
  isEdit?: boolean;
  data?: IUseditemQuestion | IUseditemQuestionAnswer;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}

export const MarketCommentsWrite = (
  props: IMarketCommentsWriteProps,
): JSX.Element => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [useCreate] = useMutationCreateUseditemQuestion();
  const [useEdit] = useMutationUpdateUseditemQuestion();

  const onClickEdit = async (): Promise<void> => {
    try {
      await useEdit({
        variables: {
          updateUseditemQuestionInput: {
            contents: textareaRef.current.value,
          },
          useditemQuestionId: props.questionId,
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
      props.setIsEdit(false);
      textareaRef.current.value = "";
      Modal.success({ content: "댓글이 정상적으로 수정되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickCreate = async (): Promise<void> => {
    try {
      await useCreate({
        variables: {
          createUseditemQuestionInput: {
            contents: textareaRef.current.value,
          },
          useditemId: props.useditemId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data.createUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      textareaRef.current.value = "";
      Modal.success({ content: "댓글이 정상적으로 등록되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <S.Wrapper>
      <S.TextArea
        ref={textareaRef}
        maxLength={100}
        placeholder={
          "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        }
        defaultValue={props.data?.contents}
      ></S.TextArea>
      <S.Bottom>
        <S.Length>{textareaRef.current?.value.length} / 100</S.Length>
        {props.isEdit ? (
          <S.Button onClick={onClickEdit}>수정하기</S.Button>
        ) : (
          <S.Button onClick={onClickCreate}>문의하기</S.Button>
        )}
      </S.Bottom>
    </S.Wrapper>
  );
};
