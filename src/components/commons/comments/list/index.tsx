import { useRouter } from "next/router";
import { useQueryFetchBoardComments } from "../../../../commons/hooks/queries/useQueryFetchBoardComments";
import { useDeleteComment } from "../../../../commons/hooks/cutoms/useDeleteComment";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "../styles";
import { Modal } from "antd";
import { TextareaUI } from "../../textarea";
import { useTextarea } from "../../../../commons/hooks/cutoms/useTextarea";
import { useForm } from "react-hook-form";
import { useEditComment } from "../../../../commons/hooks/cutoms/useEditComment";

export const ListComments = () => {
  const router = useRouter();
  const { handleSubmit, setValue } = useForm();
  const { data } = useQueryFetchBoardComments({
    boardId: router.query.boardId as string,
  });
  const {
    onChangeDeletePassword,
    openDeleteModal,
    onClickDelete,
    onClickOpenDeleteModal,
    onClickDeleteButton,
  } = useDeleteComment({ kind: "board" });
  const {
    onValid,
    commentId,
    openEditModal,
    setCommentId,
    onChangeEditPassword,
    onClickOpenEditModal,
  } = useEditComment({ kind: "board" });
  const { leng, onChangeTextarea } = useTextarea({
    setValue,
  });
  const onClickEdit = (id: string) => () => {
    setCommentId(id);
  };

  return (
    <>
      <Modal
        open={openDeleteModal}
        onOk={onClickDelete}
        onCancel={onClickOpenDeleteModal}
      >
        <div>비밀번호 입력: </div>
        <input
          type="password"
          defaultValue=""
          onChange={onChangeDeletePassword}
        />
      </Modal>
      <Modal
        open={openEditModal}
        onOk={handleSubmit(onValid)}
        onCancel={onClickOpenEditModal}
      >
        <div>비밀번호 입력: </div>
        <input
          type="password"
          defaultValue=""
          onChange={onChangeEditPassword}
        />
      </Modal>
      <S.ListWrapper>
        {data?.fetchBoardComments.map((el) => (
          <S.Row onEdit={commentId === el._id}>
            <S.CommentPic
              src={
                el.user?.picture
                  ? el.user?.picture
                  : "/images/icons/profile.png"
              }
            />
            {commentId !== el._id ? (
              <>
                <S.CommentDate>{getDate(el.updatedAt)}</S.CommentDate>
                <S.CommentContents>{el.contents}</S.CommentContents>

                <S.CommentIcons>
                  <S.Icon onClick={onClickEdit(el._id)}>
                    <img src="/images/icons/comment-edit.png" />
                  </S.Icon>
                  <S.Icon onClick={onClickDeleteButton(el._id)}>
                    <img src="/images/icons/comment-delete.png" />
                  </S.Icon>
                </S.CommentIcons>
              </>
            ) : (
              <S.Form onSubmit={onClickOpenEditModal}>
                <TextareaUI
                  isEdit
                  leng={leng}
                  defaultText={el.contents}
                  onChangeTextarea={onChangeTextarea}
                />
              </S.Form>
            )}
            <S.CommentName>{el.writer}</S.CommentName>
          </S.Row>
        ))}
      </S.ListWrapper>
    </>
  );
};
