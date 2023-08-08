import { getDate } from "../../commons/libraries/utils";
import * as S from "./Comments.styles";

export default function CommentsUI(props) {
  return (
    <S.CommentsWrapper>
      <img src="/comment-icon.png" />
      <S.SmallTitle>댓글</S.SmallTitle>
      <S.StarWrapper>
        {[1, 2, 3, 4, 5].map((index) => (
          <S.Star key={index} src="/comment-star-gray.png" />
        ))}
      </S.StarWrapper>
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
        {props.data?.fetchBoardComments.map((item) => (
          <S.CommentsRow key={item._id}>
            <S.CommentsProfile src="/profile.png" />
            <S.CommentsTextWrapper>
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
                    <S.CommentsButton onClick={props.onClickEdit}>
                      <S.CommentsButtonImg src="/comment-edit.png" />
                    </S.CommentsButton>
                    <S.CommentsButton onClick={props.onClickDelete}>
                      <S.CommentsButtonImg src="/comment-delete.png" />
                    </S.CommentsButton>
                  </S.CommentsButtonWrapper>
                </S.CommentsEtcWrapper>
              </S.CommentsWriter>
              <S.CommentsText readonly={true} defaultValue={item.contents} />
              <S.CommentsCreatedAt>
                {getDate(item.updatedAt)}
              </S.CommentsCreatedAt>
            </S.CommentsTextWrapper>
          </S.CommentsRow>
        ))}
      </S.CommentsList>
    </S.CommentsWrapper>
  );
}
