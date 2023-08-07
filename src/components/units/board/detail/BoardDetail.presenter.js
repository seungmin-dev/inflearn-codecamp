import { getDate } from "../../../commons/libraries/utils";
import * as S from "../detail/BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.ProfileImg src="/profile.png" />
        <S.WriterInfoWrapper>
          <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
          <S.CreatedAt>
            Date : {getDate(props.data?.fetchBoard.createdAt)}
          </S.CreatedAt>
        </S.WriterInfoWrapper>
      </S.HeaderWrapper>
      <S.BoardWrapper>
        <S.Title>{props.data?.fetchBoard.title}</S.Title>
        <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
      </S.BoardWrapper>
      <div>
        <div>
          <img></img>
          <span></span>
        </div>
        <div>
          <img></img>
          <span></span>
        </div>
      </div>
      <S.BtnWrapper>
        <S.Btn onClick={props.onClickMoveToList}>목록으로</S.Btn>
        <S.Btn onClick={props.onClickEdit}>수정하기</S.Btn>
        <S.Btn onClick={props.onClickDelete}>삭제하기</S.Btn>
      </S.BtnWrapper>
    </S.Container>
  );
}
