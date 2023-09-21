import * as S from "./BestBoardList.styles";
import { LikeFilled } from "@ant-design/icons";
import Link from "next/link";
import type { IBoard } from "../../../../../commons/types/generated/types";
import { getDate } from "../../../../../commons/libraries/utils";

interface IBestBoardListProps {
  data: IBoard[];
}
export const BestBoardList = (props: IBestBoardListProps): JSX.Element => {
  return (
    <S.CardWrapper>
      {props.data?.map((item) => (
        <Link href={`/boards/${item._id}`} key={item._id}>
          <S.Card>
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
