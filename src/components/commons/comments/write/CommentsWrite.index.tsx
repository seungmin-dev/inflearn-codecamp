import { Rate } from "antd";
import * as S from "./CommentsWrite.styles";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import type {
  ICommentsWriteProps,
  IcommentBoardProps,
} from "../Comments.types";
import { useCommentAuth } from "../../../../commons/hooks/cutoms/useCommentAuth";

export const CommentsWrite = (props: ICommentsWriteProps): JSX.Element => {
  const [textleng, setTextleng] = useState(0);
  const [rating, setRating] = useState(0);
  const { handleSubmit, register, setValue, trigger, reset } = useForm();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { guest } = useCommentAuth({
    kind: props.kind,
    userId: props.data?.user?._id,
  });

  useEffect(() => {
    setValue("rating", rating);
    void trigger("rating");
  }, [rating]);

  useEffect(() => {
    reset();
  }, [props.isEdit]);

  useEffect(() => {
    if (props.isComplete) {
      reset();
      setTextleng(0);
      textareaRef.current.value = "";
    }
  }, [props.isComplete]);

  const onChangeTextarea = (): void => {
    setValue("contents", textareaRef.current.value);
    setTextleng(textareaRef.current?.value.length);
    void trigger("contents");
  };

  return (
    <S.CommentForm onSubmit={handleSubmit(props.onValid)}>
      <S.CommentsHeaderWrapper>
        {guest ? (
          <>
            <S.GuestInfoWrapper>
              <S.GuestInfoInput
                type="text"
                {...register("writer")}
                placeholder="작성자"
                defaultValue={
                  (props.data as IcommentBoardProps) && data?.writer
                }
                readOnly={props.isEdit}
              />
              <S.GuestInfoInput
                type="password"
                {...register("password")}
                placeholder="비밀번호"
              />
            </S.GuestInfoWrapper>
          </>
        ) : (
          ""
        )}
        <Rate
          onChange={setRating}
          defaultValue={
            ((props.data as IcommentBoardProps) && props.data?.rating) ??
            props.prevRating
          }
        />
      </S.CommentsHeaderWrapper>
      <S.Wrapper>
        <S.TextArea
          ref={textareaRef}
          maxLength={100}
          onChange={onChangeTextarea}
          placeholder={
            "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          }
          defaultValue={props.data?.contents}
        ></S.TextArea>
        <S.Bottom>
          <S.Length>{props.data?.contents.length ?? textleng} / 100</S.Length>
          {props.isEdit ? (
            <S.Button>수정하기</S.Button>
          ) : (
            <S.Button>문의하기</S.Button>
          )}
        </S.Bottom>
      </S.Wrapper>
    </S.CommentForm>
  );
};
