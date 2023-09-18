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
      <S.ImageWrapper>
        {!props.data ? (
          <Skeleton width={600} height={500} />
        ) : (
          props.data?.fetchBoard?.images.map(
            (item, index) =>
              item && (
                <S.Image
                  key={index}
                  src={`https://storage.googleapis.com/${item}`}
                />
              ),
          )
        )}
      </S.ImageWrapper>
      <S.Contents
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            !props.data ? <Skeleton /> : props.data?.fetchBoard.contents,
          ),
        }}
      />
      {!props.data ? (
        <Skeleton width={640} height={360} />
      ) : (
        <ReactPlayer
          url={props.data?.fetchBoard?.youtubeUrl}
          style={{ margin: "50px auto 30px" }}
        />
      )}
    </S.BoardWrapper>
  );
};
