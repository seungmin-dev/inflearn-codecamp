import * as S from "./BestBoardList.styles";
import { LikeFilled } from "@ant-design/icons";
import { getDate } from "../../../../commons/libraries/utils";
import Link from "next/link";
import type { IBoard } from "../../../../../commons/types/generated/types";
import { useApolloClient } from "@apollo/client";
import { FETCH_BOARD } from "../../../../commons/hooks/queries/useQueryFetchBoard";
import _ from "lodash";

interface IBestBoardListProps {
  data: IBoard[];
}
export const BestBoardList = (props: IBestBoardListProps): JSX.Element => {
  const client = useApolloClient();

  const getDebounce = _.debounce((boardId) => {
    void client.query({
      query: FETCH_BOARD,
      variables: { boardId },
    });
  }, 300);

  const prefetchPage = (boardId: string) => async () => {
    getDebounce(boardId);
  };

  return (
    <S.CardWrapper>
      {props.data?.map((item) => (
        <Link href={`/boards/${item._id}`} key={item._id}>
          <S.Card onMouseOver={prefetchPage(item._id)}>
            <S.CardImg>
              <img
                src={`https://storage.googleapis.com/${item.images[0]}`}
                onError={(event) =>
                  (event.currentTarget.src = "/images/photo-placeholder.png")
                }
              />
            </S.CardImg>
            <S.CardInfo>
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardBelowWrapper>
                <S.CardProfileWrapper>
                  <S.CardProfile>
                    <S.CardProfileImg
                      src={
                        item.user?.picture
                          ? `https://storage.googleapis.com/${item.user?.picture}`
                          : "/images/icons/profile.png"
                      }
                    />
                    {item.user?.picture}
                    <S.CardWriter>{item.writer}</S.CardWriter>
                  </S.CardProfile>
                  <S.CardCreatedAt>
                    Date : {getDate(item.createdAt)}
                  </S.CardCreatedAt>
                </S.CardProfileWrapper>
                <S.CardLikeWrapper>
                  <LikeFilled style={{ color: "#FFD600" }} />
                  <S.CardLike>{item.likeCount}</S.CardLike>
                </S.CardLikeWrapper>
              </S.CardBelowWrapper>
            </S.CardInfo>
          </S.Card>
        </Link>
      ))}
    </S.CardWrapper>
  );
};
