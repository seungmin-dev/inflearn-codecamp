import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import { UseQueryFetchBoardsOfTheBest } from "../../../../commons/hooks/queries/useQueryFetchBoardsOfTheBest";
import { getDate } from "../../../../commons/libraries/utils";
import Link from "next/link";
import * as S from "./BestBoardList.styles";

export default function BestBoardList(): JSX.Element {
  const { data } = UseQueryFetchBoardsOfTheBest();

  return (
    <S.CardWrapper>
      {data?.fetchBoardsOfTheBest?.slice(0, 4).map((item) => (
        <Link href={`/boards/${item._id}`} key={item._id}>
          <S.Card>
            <S.CardImg imageUrl={item.images ?? item.images[0]} />
            <S.CardInfo>
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardBelowWrapper>
                <S.CardProfileWrapper>
                  <S.CardProfile>
                    <S.CardProfileImg
                      src={item.user?.picture ?? "/images/icons/profile.png"}
                    />
                    <S.CardWriter>{item.writer}</S.CardWriter>
                  </S.CardProfile>
                  <S.CardCreatedAt>
                    Date : {getDate(item.createdAt)}
                  </S.CardCreatedAt>
                </S.CardProfileWrapper>
                <S.CardLikeWrapper>
                  {item.likeCount ? (
                    <LikeFilled
                      // onClick={props.onClickLike}
                      style={{ color: "#FFD600" }}
                    />
                  ) : (
                    <LikeOutlined
                      // onClick={props.onClickLike}
                      style={{ color: "#FFD600" }}
                    />
                  )}
                  <S.CardLike>{item.likeCount}</S.CardLike>
                </S.CardLikeWrapper>
              </S.CardBelowWrapper>
            </S.CardInfo>
          </S.Card>
        </Link>
      ))}
    </S.CardWrapper>
  );
}
