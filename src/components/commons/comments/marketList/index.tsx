import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "../styles";
import { TextareaUI } from "../../textarea";
import { useTextarea } from "../../../../commons/hooks/cutoms/useTextarea";
import { useForm } from "react-hook-form";
import { useQueryFetchUseditemQuestions } from "../../../../commons/hooks/queries/useQueryFetchUseditemQuestions";
import { useDeleteComment } from "../../../../commons/hooks/cutoms/useDeleteComment";
import { useEditComment } from "../../../../commons/hooks/cutoms/useEditComment";
import { CommentOutlined } from "@ant-design/icons";
import { useState } from "react";
import { MarketWriteReply } from "../write/market.index";
import { MarketListReply } from "./reply";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/stores";

interface MarketListCommentsProps {
  sellerId: string;
}
export const MarketListComments = ({ sellerId }: MarketListCommentsProps) => {
  const router = useRouter();
  const [replyId, setReplyId] = useState("");
  const { handleSubmit, setValue } = useForm();
  const [userInfo] = useRecoilState(userInfoState);
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
  const onClickEdit = (id: string) => (): void => {
    setCommentId(id);
  };
  const onClickReply = (id: string) => (): void => {
    setReplyId(id);
  };

  return (
    <S.ListWrapper>
      {data?.fetchUseditemQuestions.map((el, i) => (
        <>
          <S.Row key={i} onEdit={commentId === el._id}>
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
                  {userInfo.id === el.user?._id || userInfo.id === sellerId ? (
                    <S.Icon onClick={onClickReply(el._id)}>
                      <CommentOutlined
                        style={{ color: "#bdbdbd", width: "15px" }}
                      />
                    </S.Icon>
                  ) : null}
                  {userInfo.id === el.user?._id ? (
                    <>
                      <S.Icon onClick={onClickEdit(el._id)}>
                        <img src="/images/icons/comment-edit.png" />
                      </S.Icon>
                      <S.Icon onClick={onClickMarketDelete(el._id)}>
                        <img src="/images/icons/comment-delete.png" />
                      </S.Icon>
                    </>
                  ) : null}
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
          {replyId !== "" && replyId == el._id ? (
            <MarketWriteReply
              useditemQuestionId={el._id}
              setReplyId={setReplyId}
            />
          ) : null}
          <MarketListReply useditemQuestionId={el._id} />
        </>
      ))}
    </S.ListWrapper>
  );
};
