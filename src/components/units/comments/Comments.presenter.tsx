import { getDate } from "../../commons/libraries/utils";
import * as S from "./Comments.styles";
import { CommentsUIProps } from "./Comments.types";

export default function CommentsUI(props: CommentsUIProps) {
  return (
    <S.CommentsWrapper>
      <S.SmallTitle>
        <img src="/comment-icon.png" />
        &nbsp;댓글
      </S.SmallTitle>
      <S.StarWrapper>
        {[1, 2, 3, 4, 5].map((index) => (
          <S.Star key={index} src="/comment-star-gray.png" />
        ))}
      </S.StarWrapper>
      <S.CommentsNewWriter
        placeholder="작성자"
        onChange={props.onChangeWriter}
      ></S.CommentsNewWriter>
      <S.CommentsNewPassword
        placeholder="비밀번호"
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
              {props.isEdit ? (
                <S.CommentsInputWrpper>
                  <S.CommentsTextarea
                    onChange={props.onChangeUpdateTextarea}
                    value={props.commentsUpdate}
                  />
                  <S.CommentsInputBottom>
                    <S.CommentsLimit>
                      {props.commentsUpdateLength} / 100
                    </S.CommentsLimit>
                    <S.CommentsUpdateButton
                    // onClick={props.onClickUpdate(item._id)}
                    >
                      수정하기
                    </S.CommentsUpdateButton>
                  </S.CommentsInputBottom>
                </S.CommentsInputWrpper>
              ) : (
                <>
                  <S.CommentsWriter>
                    {item.writer}&nbsp;&nbsp;
                    <S.CommentsEtcWrapper>
                      <S.CommentsStarWrapper>
                        <S.CommentsStar src={`/comment-star-yellow.png`} />
                        <S.CommentsStar
                          src={`/comment-star-${
                            item.rating >= 2 ? "yellow" : "gray"
                          }.png`}
                        />
                        <S.CommentsStar
                          src={`/comment-star-${
                            item.rating >= 3 ? "yellow" : "gray"
                          }.png`}
                        />
                        <S.CommentsStar
                          src={`/comment-star-${
                            item.rating >= 4 ? "yellow" : "gray"
                          }.png`}
                        />
                        <S.CommentsStar
                          src={`/comment-star-${
                            item.rating >= 5 ? "yellow" : "gray"
                          }.png`}
                        />
                      </S.CommentsStarWrapper>
                      <S.CommentsButtonWrapper>
                        <S.CommentsButtonImg
                          src="/comment-edit.png"
                          onClick={props.onClickEdit}
                        />
                        <S.CommentsButtonImg
                          id={item._id}
                          onClick={props.onClickDelete}
                          src="/comment-delete.png"
                        />
                      </S.CommentsButtonWrapper>
                    </S.CommentsEtcWrapper>
                  </S.CommentsWriter>
                  <S.CommentsText
                    readOnly={true}
                    defaultValue={item.contents}
                  />
                  <S.CommentsCreatedAt>
                    {getDate(item.updatedAt)}
                  </S.CommentsCreatedAt>
                </>
              )}
            </S.CommentsTextWrapper>
          </S.CommentsRow>
        ))}
      </S.CommentsList>
    </S.CommentsWrapper>
  );
}
