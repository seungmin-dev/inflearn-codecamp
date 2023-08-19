import Link from "next/link";
import * as S from "./BoardList.styles";
import type { IBoardListUIProps } from "./BoardList.types";
import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import { getDate } from "../../../commons/libraries/utils";
import Pagination from "../../../commons/paginations/Pagination.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Container>
      <S.Title>베스트 게시글</S.Title>
      <div>
        <S.CardWrapper>
          {props.data?.fetchBoards?.slice(0, 4).map((item) => (
            <Link href={`/boards/${item._id}`} key={item._id}>
              <S.Card>
                <S.CardImg imageUrl={item.images[0]} />
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
            </Link>
          ))}
        </S.CardWrapper>
      </div>
      <S.SearchWrapper>
        <S.SearchInput
          onChange={props.onChangeSearch}
          placeholder="제목을 검색해주세요."
        />
        {/* <S.SearchDate placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
        <S.SearchButton onClick={props.onClickSearch}>검색하기</S.SearchButton> */}
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
                <S.ListBodyTextTitle>
                  {item.title
                    .replaceAll(props.keyword, `!@#$${props.keyword}!@#$`)
                    .split("!@#$")
                    .map((el) => (
                      <span
                        key={uuidv4()}
                        style={{
                          color: props.keyword === el ? "#ffd600" : "black",
                        }}
                      >
                        {el}
                      </span>
                    ))}
                </S.ListBodyTextTitle>
              </Link>
              <S.ListBodyTextWriter>{item.writer}</S.ListBodyTextWriter>
              <S.ListBodyTextDate>
                {item.createdAt.slice(0, 10)}
              </S.ListBodyTextDate>
            </S.ListBodyLine>
          ))}
        </S.ListBody>
      </S.ListWrapper>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Pagination count={props.count} refetch={props.refetch} />
        <Link href="/boards/new">
          <S.NewButton>게시물 등록하기</S.NewButton>
        </Link>
      </div>
    </S.Container>
  );
}
