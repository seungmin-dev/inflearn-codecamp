import Link from "next/link.js";
import * as S from "../list/BoardList.styles.js";

export default function BoardListUI(props) {
  return (
    <S.Container>
      <S.Title>베스트 게시글</S.Title>
      <div>
        <S.CardWrapper>
          {props.data?.fetchBoards.slice(0, 4).map((item) => (
            <S.CardInfo key={item._id}>
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardBelowWrapper>
                <S.CardProfileWrapper>
                  <S.CardProfile>
                    <S.CardProfileImg src="/profile.png" />
                    <S.CardWriter>{item.writer}</S.CardWriter>
                  </S.CardProfile>
                  <S.CardCreatedAt>
                    Date : {item.createdAt.slice(0, 10)}
                  </S.CardCreatedAt>
                </S.CardProfileWrapper>
                <S.CardLikeWrapper>
                  <S.CardThumbsUpImg src="/thumbsUp.png" />
                  <S.CardLike>{item.likeCount}</S.CardLike>
                </S.CardLikeWrapper>
              </S.CardBelowWrapper>
            </S.CardInfo>
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
          {props.data?.fetchBoards.map((item, index) => (
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
