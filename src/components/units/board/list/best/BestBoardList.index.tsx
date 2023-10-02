import * as S from "./BestBoardList.styles";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import type { IBoard } from "../../../../../commons/types/generated/types";
import { getDate } from "../../../../../commons/libraries/utils";
import { Carousel } from "antd";
import { useApolloClient } from "@apollo/client";
import _ from "lodash";
import { FETCH_BOARDS } from "../../../../../commons/hooks/queries/useQueryFetchBoards";

interface IBestBoardListProps {
  data: IBoard[];
}
export const BestBoardList = (props: IBestBoardListProps): JSX.Element => {
  const client = useApolloClient();

  const getDebounce = _.debounce((useditemId) => {
    void client.query({
      query: FETCH_BOARDS,
      variables: { useditemId },
    });
  }, 300);

  const prefetchPage = (boardId: string) => async () => {
    getDebounce(boardId);
  };
  return (
    <S.CardWrapper>
      <S.CarouselWrapper>
        {props.data && props.data.length === 4 ? (
          <Carousel>
            {props.data.map((el) => (
              <div>
                <S.Card>
                  <S.CardImg>
                    <img
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      onError={(event) =>
                        (event.currentTarget.src =
                          "/images/photo-placeholder.png")
                      }
                    />
                  </S.CardImg>
                  <S.CardInfo>
                    <S.CardTitle>{el.title}</S.CardTitle>
                    <S.CardWriter>
                      <S.CardProfileImg
                        src={
                          el.user?.picture
                            ? `https://storage.googleapis.com/${el.user?.picture}`
                            : "/images/icons/profile.png"
                        }
                      />
                      {el.writer}
                    </S.CardWriter>
                    <S.CardCreatedAt>
                      Date : {getDate(el.createdAt)}
                    </S.CardCreatedAt>
                    <S.CardThumbs />
                    <S.CardLike>{el.likeCount}</S.CardLike>
                    <Link href={`/boards/${el._id}`} key={uuidv4()}>
                      <S.Button onMouseOver={prefetchPage(el._id)}>
                        보러가기 →
                      </S.Button>
                    </Link>
                  </S.CardInfo>
                </S.Card>
              </div>
            ))}
          </Carousel>
        ) : (
          <div />
        )}
      </S.CarouselWrapper>
      <Link href="/boards/new">
        <S.NewWrapper>
          <S.ButtonTitle>새 글 등록하기</S.ButtonTitle>
          <S.ButtonText>어떤 이야기를 해볼까요?</S.ButtonText>
          <img src="/images/icons/3d-pencil.png" />
        </S.NewWrapper>
      </Link>
    </S.CardWrapper>
  );
};
