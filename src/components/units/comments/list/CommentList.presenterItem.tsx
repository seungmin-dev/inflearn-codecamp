import { Rate } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./CommentList.styles";
import type { ICommentListUIItemProps } from "./CommentList.types";
import { useRouter } from "next/router";
import type { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { DELETE_BOARD_COMMENT } from "../write/CommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";
import CommentWrite from "../write/CommentWrite.container";

export default function CommentListUIItem(
  props: ICommentListUIItemProps,
): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    // const password = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.item._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLImageElement>,
  ): void => {
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(event.target.value);
  };
  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal open={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {!isEdit ? (
        <S.CommentsRow key={props.item._id}>
          <S.CommentsProfile src="/images/icons/profile.png" />
          <S.CommentsTextWrapper>
            <S.CommentsWriter>
              {props.item.writer}&nbsp;&nbsp;
              <S.CommentsEtcWrapper>
                <S.CommentsStarWrapper>
                  <span>
                    <Rate disabled defaultValue={props.item.rating} />
                  </span>
                </S.CommentsStarWrapper>
                <S.CommentsButtonWrapper>
                  <S.CommentsButtonImg
                    onClick={onClickUpdate}
                    src="/images/icons/comment-edit.png"
                  />
                  <S.CommentsButtonImg
                    onClick={onClickOpenDeleteModal}
                    src="/images/icons/comment-delete.png"
                  />
                </S.CommentsButtonWrapper>
              </S.CommentsEtcWrapper>
            </S.CommentsWriter>
            <S.CommentsText
              readOnly={true}
              defaultValue={props.item.contents}
            />
            <S.CommentsCreatedAt>
              {getDate(props.item.updatedAt)}
            </S.CommentsCreatedAt>
          </S.CommentsTextWrapper>
        </S.CommentsRow>
      ) : (
        <CommentWrite isEdit={true} setIsEdit={setIsEdit} item={props.item} />
      )}
    </>
  );
}
