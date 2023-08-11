import { getDate } from "../../commons/libraries/utils";
import * as S from "./Comments.styles";
import type { CommentsUIProps } from "./Comments.types";
import { Rate } from "antd";

export default function CommentsUI(props: CommentsUIProps): JSX.Element {
  return (
    <>
      {props.isOpenDeleteModal && (
        <S.PasswordModal open={true} onOk={props.onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </S.PasswordModal>
      )}
      <S.CommentsWrapper>
        <S.SmallTitle>
          <img src="/comment-icon.png" />
          &nbsp;댓글
        </S.SmallTitle>
        <S.StarWrapper>
          <Rate onChange={props.setStar} />
        </S.StarWrapper>
        <S.CommentsNewWriter
          placeholder="작성자"
          onChange={props.onChangeWriter}
        ></S.CommentsNewWriter>
        <S.CommentsNewPassword
          placeholder="비밀번호"
          type="password"
          onChange={props.onChangePassword}
        ></S.CommentsNewPassword>
        <S.CommentsInputWrpper>
          <S.CommentsTextarea
            onChange={props.onChangeTextarea}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            value={props.comments}
          />
          <S.CommentsInputBottom>
            <S.CommentsLimit>{props.commentsLength} / 100</S.CommentsLimit>
            <S.CommentsSubmitButton onClick={props.onClickSubmit}>
              등록하기
            </S.CommentsSubmitButton>
          </S.CommentsInputBottom>
        </S.CommentsInputWrpper>
        <S.CommentsList>
          {props.data?.fetchBoardComments?.map((item) => (
            <S.CommentsRow key={item._id}>
              <S.CommentsProfile src="/profile.png" />
              <S.CommentsTextWrapper>
                <S.CommentsWriter>
                  {item.writer}&nbsp;&nbsp;
                  <S.CommentsEtcWrapper>
                    <S.CommentsStarWrapper>
                      <span>
                        <Rate disabled defaultValue={item.rating} />
                      </span>
                    </S.CommentsStarWrapper>
                    <S.CommentsButtonWrapper>
                      <S.CommentsButtonImg
                        src="/comment-edit.png"
                        onClick={props.onClickEdit}
                      />
                      <S.CommentsButtonImg
                        id={item._id}
                        onClick={props.onClickOpenDeleteModal}
                        src="/comment-delete.png"
                      />
                    </S.CommentsButtonWrapper>
                  </S.CommentsEtcWrapper>
                </S.CommentsWriter>
                <S.CommentsText readOnly={true} defaultValue={item.contents} />
                <S.CommentsCreatedAt>
                  {getDate(item.updatedAt)}
                </S.CommentsCreatedAt>
              </S.CommentsTextWrapper>
            </S.CommentsRow>
          ))}
        </S.CommentsList>
      </S.CommentsWrapper>
    </>
  );
}
