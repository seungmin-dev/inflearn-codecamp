import type {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../commons/types/generated/types";
import { getDate } from "../libraries/utils";
import * as S from "./styles";
import { useState } from "react";
import { MarketCommentsWrite } from "../../units/markets/comments/write/MarketCommentsWrite.index";
import { MarketCommentsWriteForReply } from "../../units/markets/comments/write/MarketCommentsWriteForReply.index";
import { useMutationDeleteUseditemQuestion } from "../hooks/mutations/useMutationDeleteUseditemQuestion";
import { useMutationDeleteUseditemQuestionAnswer } from "../hooks/mutations/useMutationDeleteUseditemQuestionAnswer";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { userIdState } from "../stores";

interface ICommentProps {
  questionId: string;
  questionAnswerId?: string;
  data: IUseditemQuestion | IUseditemQuestionAnswer;
  isReply?: boolean;
}

export const Comment = (props: ICommentProps): JSX.Element => {
  const [userId] = useRecoilState(userIdState);
  const [isEdit, setIsEdit] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [useDelete] = useMutationDeleteUseditemQuestion();
  const [useDeleteReply] = useMutationDeleteUseditemQuestionAnswer();

  const onClickEdit = (): void => {
    setIsEdit((prev) => !prev);
  };
  const onClickReply = (): void => {
    setIsReplying((prev) => !prev);
  };
  const onClickDelete = async (): Promise<void> => {
    try {
      if (props.isReply) {
        await useDeleteReply({
          variables: { useditemQuestionAnswerId: props.questionAnswerId },
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
        Modal.success({ content: "댓글이 정상적으로 삭제되었습니다." });
      } else {
        await useDelete({
          variables: { useditemQuestionId: props.questionId },
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
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <div style={{ width: "100%", height: "auto" }}>
      <S.Row isEdit={isEdit}>
        <S.UserPic
          src={`https://storage.googleapis.com/${props.data.user.picture}`}
          onError={(event) =>
            (event.currentTarget.src = "/images/icons/profile.png")
          }
        />
        <S.UserName>{props.data.user.name}</S.UserName>
        {userId && !isEdit ? (
          <S.Icons>
            <>
              {userId === props.data.user._id ? (
                <>
                  <S.EditIcon onClick={onClickEdit} />
                  <S.DeleteIcon onClick={onClickDelete} />
                </>
              ) : (
                <S.CommentIcon onClick={onClickReply} />
              )}
            </>
          </S.Icons>
        ) : (
          ""
        )}
        {isEdit ? (
          props.isReply ? (
            <MarketCommentsWriteForReply
              data={props.data}
              questionId={props.questionId}
              isEdit={true}
              setIsEdit={setIsEdit}
            />
          ) : (
            <MarketCommentsWrite
              data={props.data}
              questionId={props.questionId}
              isEdit={true}
              setIsEdit={setIsEdit}
            />
          )
        ) : (
          <>
            <S.Contents>{props.data.contents}</S.Contents>
            <S.CommentDate>{getDate(props.data.createdAt)}</S.CommentDate>
          </>
        )}
      </S.Row>
      {isReplying ? (
        <>
          <MarketCommentsWriteForReply
            questionId={props.questionId}
            isReplying={isReplying}
            setIsReplying={setIsReplying}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};
