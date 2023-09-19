import { Skeleton } from "@mui/material";
import type { IQuery } from "../../../../../commons/types/generated/types";
import * as S from "../BoardDetail.styles";
import DOMPurify from "dompurify";
import ReactPlayer from "react-player";

interface IBoardDetailBodyProps {
  data: Pick<IQuery, "fetchBoard">;
}

export const BoardDetailBody = (props: IBoardDetailBodyProps): JSX.Element => {
  return (
    <S.BoardWrapper>
      <S.Title>
        {!props.data ? <Skeleton /> : props.data?.fetchBoard?.title}
      </S.Title>
      {props.data?.fetchBoard?.images.length === 0 ? (
        ""
      ) : (
        <S.ImageWrapper>
          {props.data?.fetchBoard?.images.map(
            (item, index) =>
              item && (
                <S.Image
                  key={index}
                  src={`https://storage.googleapis.com/${item}`}
                />
              ),
          )}
        </S.ImageWrapper>
      )}
      <S.Contents
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            !props.data ? <Skeleton /> : props.data?.fetchBoard.contents,
          ),
        }}
      />
      {!props.data?.fetchBoard?.youtubeUrl ? (
        ""
      ) : (
        <ReactPlayer
          url={props.data?.fetchBoard?.youtubeUrl}
          style={{ margin: "50px auto 30px" }}
        />
      )}
    </S.BoardWrapper>
  );
};
