import Link from "next/link";
import * as S from "./BoardList.styles";
import type { IBoardListUIProps } from "./BoardList.types";
import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import { getDate } from "../../../commons/libraries/utils";

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Container>
      <S.Title>베스트 게시글</S.Title>
      <div>
        <S.CardWrapper>
          {props.data?.fetchBoards?.slice(0, 4).map((item) => (
            <S.Card key={item._id}>
              <S.CardImg />
              <S.CardInfo>
                <S.CardTitle>{item.title}</S.CardTitle>
                <S.CardBelowWrapper>
                  <S.CardProfileWrapper>
                    <S.CardProfile>
                      <S.CardProfileImg src="/images/icons/profile.png" />
                      <S.CardWriter>{item.writer}</S.CardWriter>
                    </S.CardProfile>
                    <S.CardCreatedAt>
                      Date : {getDate(item.createdAt)}
                    </S.CardCreatedAt>
                  </S.CardProfileWrapper>
                  <S.CardLikeWrapper>
                    {props.isLike ? (
                      <LikeFilled
                        onClick={props.onClickLike}
                        style={{ color: "#FFD600" }}
                      />
                    ) : (
                      <LikeOutlined
                        onClick={props.onClickLike}
                        style={{ color: "#FFD600" }}
                      />
                    )}
                    <S.CardLike>{item.likeCount}</S.CardLike>
                  </S.CardLikeWrapper>
                </S.CardBelowWrapper>
              </S.CardInfo>
            </S.Card>
          ))}
        </S.CardWrapper>
      </div>
      <S.SearchWrapper>
        <S.SearchInput placeholder="제목을 검색해주세요." />
        <S.SearchDate placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
        <S.SearchButton>검색하기</S.SearchButton>
      </S.SearchWrapper>
      <S.ListWrapper>
        <S.ListHeader>
          <S.ListHeaderTextIndex>번호</S.ListHeaderTextIndex>
          <S.ListHeaderTextTitle>제목</S.ListHeaderTextTitle>
          <S.ListHeaderTextWriter>작성자</S.ListHeaderTextWriter>
          <S.ListHeaderTextDate>날짜</S.ListHeaderTextDate>
        </S.ListHeader>
        <S.ListBody>
          {props.data?.fetchBoards?.map((item, index: number) => (
            <S.ListBodyLine key={item._id}>
              <S.ListBodyTextIndex>{index + 1}</S.ListBodyTextIndex>
              <Link href={`/boards/${item._id}`}>
                <S.ListBodyTextTitle>{item.title}</S.ListBodyTextTitle>
              </Link>
              <S.ListBodyTextWriter>{item.writer}</S.ListBodyTextWriter>
              <S.ListBodyTextDate>
                {item.createdAt.slice(0, 10)}
              </S.ListBodyTextDate>
            </S.ListBodyLine>
          ))}
        </S.ListBody>
      </S.ListWrapper>
      <S.Pagenation>1 2</S.Pagenation>
      <Link href="/boards/new">
        <S.NewButton>게시물 등록하기</S.NewButton>
      </Link>
    </S.Container>
  );
}
