import ReactPlayer from "react-player";
import { getDate } from "../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import type { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.ProfileImg src="/profile.png" />
        <S.WriterInfoWrapper>
          <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
          <S.CreatedAt>
            Date : {getDate(props.data?.fetchBoard?.createdAt)}
          </S.CreatedAt>
        </S.WriterInfoWrapper>
        <S.IconWrapper>
          <S.LinkIcon />
          <Tooltip
            placement="topRight"
            title={`${props.data?.fetchBoard?.boardAddress?.address} ${props.data?.fetchBoard?.boardAddress?.addressDetail}`}
          >
            <S.LocationIcon />
          </Tooltip>
        </S.IconWrapper>
      </S.HeaderWrapper>
      <S.BoardWrapper>
        <S.Title>{props.data?.fetchBoard?.title}</S.Title>
        <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        <ReactPlayer
          url={props.data?.fetchBoard?.youtubeUrl}
          style={{ margin: "50px auto 30px" }}
        />
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
