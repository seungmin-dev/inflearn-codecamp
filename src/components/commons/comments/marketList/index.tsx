import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "../styles";
import { TextareaUI } from "../../textarea";
import { useTextarea } from "../../../../commons/hooks/cutoms/useTextarea";
import { useForm } from "react-hook-form";
import { useQueryFetchUseditemQuestions } from "../../../../commons/hooks/queries/useQueryFetchUseditemQuestions";
import { useDeleteComment } from "../../../../commons/hooks/cutoms/useDeleteComment";
import { useEditComment } from "../../../../commons/hooks/cutoms/useEditComment";

export const MarketListComments = () => {
  const router = useRouter();
  const { handleSubmit, setValue } = useForm();
  const { data } = useQueryFetchUseditemQuestions({
    useditemId: router.query.useditemId as string,
  });
  const { onClickMarketDelete } = useDeleteComment({
    kind: "market",
  });
  const { onValid, commentId, setCommentId } = useEditComment({
    kind: "market",
  });

  const { leng, onChangeTextarea } = useTextarea({
    setValue,
  });
  const onClickEdit = (id: string) => () => {
    setCommentId(id);
  };

  return (
    <S.ListWrapper>
      {data?.fetchUseditemQuestions.map((el) => (
        <S.Row onEdit={commentId === el._id}>
          <S.CommentPic
            src={
              el.user?.picture
                ? `https://storage.googleapis.com/${el.user?.picture}`
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
                <S.Icon onClick={onClickMarketDelete(el._id)}>
                  <img src="/images/icons/comment-delete.png" />
                </S.Icon>
              </S.CommentIcons>
            </>
          ) : (
            <S.Form onSubmit={handleSubmit(onValid)}>
              <TextareaUI
                isEdit
                leng={leng}
                defaultText={el.contents}
                onChangeTextarea={onChangeTextarea}
              />
            </S.Form>
          )}
          <S.CommentName>{el.user.name}</S.CommentName>
        </S.Row>
      ))}
    </S.ListWrapper>
  );
};
