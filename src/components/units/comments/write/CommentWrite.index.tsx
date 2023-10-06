import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import * as S from "./CommentWrite.styles";
import { Modal, Rate } from "antd";
import type { ICommentWriteProps } from "./CommentWrite.types";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/stores";
import { useMutationCreateBoardComment } from "../../../../commons/hooks/mutations/useMutationCreateBoardComment";
import { useMutationUpdateBoardComment } from "../../../../commons/hooks/mutations/useMutationUpdateBoardComment";

interface ICommentFormProps {
  writer?: string;
  contents: string;
  rating?: number;
  password?: string;
  useditemQuestionId?: string;
}
export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  const router = useRouter();

  const [textleng, setTextleng] = useState(0);
  const [prevRating, setPrevRating] = useState(0);
  const [, setStar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const [userInfo] = useRecoilState(userInfoState);

  const { handleSubmit, register, setValue, trigger, reset } = useForm();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [createBoardComment] = useMutationCreateBoardComment();
  const [updateBoardComment] = useMutationUpdateBoardComment();

  useEffect(() => {
    if (userInfo.id) {
      setValue("writer", userInfo.name);
      setValue("password", "!@#$");
    }
    if (isComplete) {
      reset();
      setTextleng(0);
      textareaRef.current.value = "";
    }
  }, [isComplete]);

  const onChangeTextarea = () => {
    setValue("contents", textareaRef.current.value);
    setTextleng(textareaRef.current?.value.length);
    void trigger("contents");
  };

  const onValid = async (data: ICommentFormProps): Promise<void> => {
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      if (!props.isEdit) {
        setIsComplete(true);
        setPrevRating(data.rating);
        // 새댓글
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: data.writer ?? userInfo.name,
              password: data.password,
              contents: data.contents,
              rating: data.rating ?? prevRating,
            },
            boardId: router.query.boardId,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchBoardComments: (prev) => {
                  return [data.createBoardComment, ...prev];
                },
              },
            });
          },
        });
        setIsComplete(false);
        if (props.setIsEdit) props.setIsEdit(false);
      } else {
        // 댓글 수정
        if (!data.contents) {
          Modal.error({ content: "수정된 내용이 없습니다." });
          return;
        }
        await updateBoardComment({
          variables: {
            updateBoardCommentInput: {
              contents: data.contents,
              rating: data.rating,
            },
            boardCommentId: props.item?._id,
            password: data.password,
          },
          update(cache, { data }) {
            cache.modify({
              id: cache.identify(data),
              fields: {
                fetchBoardComments: (prev) => {
                  return [data.updateBoardComment, ...prev];
                },
              },
            });
          },
        });
        props.setIsEdit(false);
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.CommentWriterWrapper>
      <S.SmallTitle>
        <img src="/images/icons/comment-icon.png" />
        &nbsp;댓글
      </S.SmallTitle>
      <form onSubmit={handleSubmit(onValid)}>
        <S.StarWrapper>
          <Rate onChange={setStar} defaultValue={props.item?.rating} />
        </S.StarWrapper>
        {!userInfo.id ? (
          <>
            <S.CommentsNewWriter
              placeholder="작성자"
              {...register("writer")}
              defaultValue={props.item?.writer}
              readOnly={props.isEdit}
            ></S.CommentsNewWriter>
            <S.CommentsNewPassword
              placeholder="비밀번호"
              type="password"
              {...register("password")}
              defaultValue={""}
            ></S.CommentsNewPassword>
          </>
        ) : null}
        <S.CommentsInputWrpper>
          <S.CommentsTextarea
            ref={textareaRef}
            onChange={onChangeTextarea}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            id="contents"
            defaultValue={props.item?.contents}
          />
          <S.CommentsInputBottom>
            <S.CommentsLimit>{textleng}/ 100</S.CommentsLimit>
            <S.CommentsSubmitButton>등록하기</S.CommentsSubmitButton>
          </S.CommentsInputBottom>
        </S.CommentsInputWrpper>
      </form>
    </S.CommentWriterWrapper>
  );
}
