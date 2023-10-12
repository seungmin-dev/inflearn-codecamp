import * as S from "../styles";
import { useQueryFetchUseditemQuestionAnswers } from "../../../../commons/hooks/queries/useQueryFetchUseditemQuestionAnswers";
import { getDate } from "../../../../commons/libraries/utils";
import { TextareaUI } from "../../textarea";
import { useTextarea } from "../../../../commons/hooks/cutoms/useTextarea";
import { useForm } from "react-hook-form";
import { useEditReply } from "../../../../commons/hooks/cutoms/useEditReply";
import { useDeleteReply } from "../../../../commons/hooks/cutoms/useDeleteReply";

interface MarketListReplyProps {
  useditemQuestionId: string;
}

export const MarketListReply = ({
  useditemQuestionId,
}: MarketListReplyProps) => {
  const { handleSubmit, setValue } = useForm();
  const { leng, onChangeTextarea } = useTextarea({ setValue });
  const { data } = useQueryFetchUseditemQuestionAnswers({ useditemQuestionId });
  const { commentId, onClickEdit, onValid } = useEditReply();
  const { onClickDelete } = useDeleteReply();

  return (
    <S.Wrapper>
      {data?.fetchUseditemQuestionAnswers.map((el, i) => (
        <S.ReplyWrapper key={i}>
          <S.ReplyIcon />
          <S.ReplyRow onEdit={commentId === el._id}>
            <S.CommentPic
              src={
                el.user?.picture
                  ? `https://storage.googleapis.com/${el.user?.picture}`
                  : "/images/icons/profile.png"
              }
            />
            <S.CommentName>{el.user?.name}</S.CommentName>
            {commentId !== el._id ? (
              <>
                <S.CommentContents>{el.contents}</S.CommentContents>
                <S.CommentDate>{getDate(el.updatedAt)}</S.CommentDate>
                {}
                <S.CommentIcons>
                  <S.Icon onClick={onClickEdit(el._id)}>
                    <img src="/images/icons/comment-edit.png" />
                  </S.Icon>
                  <S.Icon onClick={onClickDelete(el._id)}>
                    <img src="/images/icons/comment-delete.png" />
                  </S.Icon>
                </S.CommentIcons>
              </>
            ) : (
              <S.Form onSubmit={handleSubmit(onValid)}>
                <TextareaUI
                  defaultText={el.contents}
                  isEdit
                  leng={leng}
                  onChangeTextarea={onChangeTextarea}
                />
              </S.Form>
            )}
          </S.ReplyRow>
        </S.ReplyWrapper>
      ))}
    </S.Wrapper>
  );
};
