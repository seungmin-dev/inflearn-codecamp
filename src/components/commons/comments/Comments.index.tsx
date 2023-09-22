import { Modal, Rate } from "antd";
import * as S from "./Comments.styles";
import { getDate } from "../../../commons/libraries/utils";
import { useState, useRef } from "react";
import { useMutationDeleteBoardComment } from "../../../commons/hooks/mutations/useMutationDeleteBoardComment";
import { BoardCommentsWrite } from "../../units/board/comments/write/BoardCommentsWrite.index";
import { MarketCommentsWrite } from "../../units/markets/comments/write/MarketCommentsWrite.index";
import type { IcommentBoardProps, IcommentMarketProps } from "./Comments.types";
import { useMutationDeleteUseditemQuestion } from "../../../commons/hooks/mutations/useMutationDeleteUseditemQuestion";
import { useCommentAuth } from "../../../commons/hooks/cutoms/useCommentAuth";

interface ICommentsProps {
  kind: string;
  data: IcommentBoardProps | IcommentMarketProps;
}

export const Comments = (props: ICommentsProps): JSX.Element => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteBoardComment] = useMutationDeleteBoardComment();
  const [deleteMarketComment] = useMutationDeleteUseditemQuestion();
  const passwordRef = useRef(null);
  const { owner, guest } = useCommentAuth({
    kind: props.kind,
    userId: props.data?.user?._id,
  });

  const onClickEdit = (): void => {
    setIsEdit(true);
  };
  const onClickToggleDeleteModal = (): void => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  // 비회원 전용 삭제기능
  const onClickDeleteGuest = async (): Promise<void> => {
    try {
      await deleteBoardComment({
        variables: {
          password: passwordRef.current.value,
          boardCommentId: props.data._id,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoardComments: (prev, { readField }) => {
                const deleteId = data.deleteBoardComment;
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
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteMarketComment({
        variables: {
          useditemQuestionId: props.data?._id,
        },
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

  return (
    <S.CommentWrapper>
      {isOpenDeleteModal && (
        <S.PasswordModal
          open={true}
          onCancel={onClickToggleDeleteModal}
          onOk={onClickDeleteGuest}
        >
          <S.PasswordInput
            type="password"
            ref={passwordRef}
            placeholder="비밀번호를 입력해주세요."
          />
        </S.PasswordModal>
      )}
      {!isEdit ? (
        <S.CommentItem key={props.data._id}>
          <S.CommentProfile
            src={
              props.data?.user
                ? `https://storage.googleapis.com/${props.data?.user?.picture}`
                : "/images/icons/profile.png"
            }
            onError={(event) =>
              (event.currentTarget.src = "/images/icons/profile.png")
            }
          />
          <S.CommentWriter>
            {guest && "writer" in props.data && props.data.writer
              ? props.data.writer
              : props.data.user.name}
          </S.CommentWriter>
          {props.kind === "board" && "rating" in props.data && (
            <S.CommentStarWrapper>
              <Rate disabled defaultValue={props.data.rating} />
            </S.CommentStarWrapper>
          )}
          {owner ? (
            <>
              <S.CommentEditButton
                onClick={onClickEdit}
                src="/images/icons/comment-edit.png"
              />
              <S.CommentDeleteButton
                onClick={guest ? onClickToggleDeleteModal : onClickDelete}
                src="/images/icons/comment-delete.png"
              />
            </>
          ) : (
            ""
          )}
          <S.CommentContents
            readOnly={true}
            defaultValue={props.data.contents}
          />
          <S.CommentCreatedAt>
            {getDate(props.data.updatedAt)}
          </S.CommentCreatedAt>
        </S.CommentItem>
      ) : props.kind === "board" ? (
        "rating" in props.data && (
          <BoardCommentsWrite data={props.data} isEdit setIsEdit={setIsEdit} />
        )
      ) : (
        <MarketCommentsWrite
          data={props.data as IcommentMarketProps}
          isEdit
          setIsEdit={setIsEdit}
        />
      )}
    </S.CommentWrapper>
  );
};
