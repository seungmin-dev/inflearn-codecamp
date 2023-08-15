import * as S from "./CommentWrite.styles";
import type { ICommentWriteUIProps } from "./CommentWrite.types";
import { Rate } from "antd";

export default function CommentWriteUI(
  props: ICommentWriteUIProps,
): JSX.Element {
  return (
    <S.CommentWriterWrapper>
      <S.SmallTitle>
        <img src="/images/icons/comment-icon.png" />
        &nbsp;댓글
      </S.SmallTitle>
      <S.StarWrapper>
        <Rate onChange={props.setStar} />
      </S.StarWrapper>
      <S.CommentsNewWriter
        placeholder="작성자"
        onChange={props.onChangeWriter}
        value={props.writer !== "" ? props.writer : props.item?.writer ?? ""}
        readOnly={props.isEdit}
      ></S.CommentsNewWriter>
      <S.CommentsNewPassword
        placeholder="비밀번호"
        type="password"
        onChange={props.onChangePassword}
        value={props.password}
      ></S.CommentsNewPassword>
      <S.CommentsInputWrpper>
        <S.CommentsTextarea
          onChange={props.onChangeTextarea}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={
            props.contents !== "" ? props.contents : props.item?.contents ?? ""
          }
        />
        <S.CommentsInputBottom>
          <S.CommentsLimit>
            {props.contents !== ""
              ? props.contents.length
              : props.item?.contents.length ?? 0}
            / 100
          </S.CommentsLimit>
          <S.CommentsSubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          >
            등록하기
          </S.CommentsSubmitButton>
        </S.CommentsInputBottom>
      </S.CommentsInputWrpper>
    </S.CommentWriterWrapper>
  );
}
