import Link from "next/link";
import * as S from "./BoardListBody.styles";
import { v4 as uuidv4 } from "uuid";
import type { IQuery } from "../../../../../commons/types/generated/types";
import { useApolloClient } from "@apollo/client";
import _ from "lodash";
import { FETCH_BOARD } from "../../../../../commons/hooks/queries/useQueryFetchBoard";
import type { ChangeEvent } from "react";
import Searchbars from "../../../../commons/searchbars/Searchbars.index";

interface IBoardListBodyProps {
  keyword: string;
  data: Pick<IQuery, "fetchBoards">;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function BoardListBody(props: IBoardListBodyProps): JSX.Element {
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
    <S.ListWrapper>
      <Searchbars onChangeSearch={props.onChangeSearch} />
      <S.ListHeader>
        <S.ListHeaderTextIndex>번호</S.ListHeaderTextIndex>
        <S.ListHeaderTextTitle>제목</S.ListHeaderTextTitle>
        <S.ListHeaderTextWriter>작성자</S.ListHeaderTextWriter>
        <S.ListHeaderTextDate>날짜</S.ListHeaderTextDate>
      </S.ListHeader>
      <S.ListBody>
        {(props.data?.fetchBoards ?? new Array(10).fill("1")).map(
          (item, index: number) => (
            <S.ListBodyLine key={item._id}>
              <S.ListBodyTextIndex>{index + 1}</S.ListBodyTextIndex>
              <Link href={`/boards/${item._id}`}>
                <S.ListBodyTextTitle onMouseOver={prefetchPage(item._id)}>
                  {item.title
                    ?.replaceAll(props.keyword, `!@#$${props.keyword}!@#$`)
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
                {item.createdAt?.slice(0, 10)}
              </S.ListBodyTextDate>
            </S.ListBodyLine>
          ),
        )}
      </S.ListBody>
    </S.ListWrapper>
  );
}
