import { Skeleton } from "@mui/material";
import type { IQuery } from "../../../../../commons/types/generated/types";
import * as S from "../BoardDetail.styles";
import DOMPurify from "dompurify";
import ReactPlayer from "react-player";
import { useMutationLikeBoard } from "../../../../commons/hooks/mutations/useMutationLikeBoard";
import { useMutationDislikeBoard } from "../../../../commons/hooks/mutations/useMutationDisikeBoard";
import { FETCH_BOARD } from "../../../../commons/hooks/queries/useQueryFetchBoard";

interface IBoardDetailBodyProps {
  data: Pick<IQuery, "fetchBoard">;
}

export const BoardDetailBody = (props: IBoardDetailBodyProps): JSX.Element => {
  const [likeBoard] = useMutationLikeBoard();
  const [dislikeBoard] = useMutationDislikeBoard();

  const onClickLikeBoard = async (): Promise<void> => {
    await likeBoard({
      variables: { boardId: props.data?.fetchBoard?._id },
      optimisticResponse: {
        likeBoard: (props.data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: props.data?.fetchBoard?._id },
          data: {
            fetchBoard: {
              _id: props.data?.fetchBoard?._id,
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };
  const onClickDislikeBoard = async (): Promise<void> => {
    await dislikeBoard({
      variables: { boardId: props.data?.fetchBoard?._id },
      optimisticResponse: {
        dislikeBoard: (props.data?.fetchBoard.dislikeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: props.data?.fetchBoard?._id },
          data: {
            fetchBoard: {
              _id: props.data?.fetchBoard?._id,
              __typename: "Board",
              dislikeCount: data?.dislikeBoard,
            },
          },
        });
      },
    });
  };

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
      <S.LikeWrapper>
        <S.LikeIcon onClick={onClickLikeBoard} />
        <S.LikeCount>{props.data?.fetchBoard?.likeCount}</S.LikeCount>
        <S.DislikeIcon onClick={onClickDislikeBoard} />
        <S.DislikeCount>{props.data?.fetchBoard?.dislikeCount}</S.DislikeCount>
      </S.LikeWrapper>
    </S.BoardWrapper>
  );
};
