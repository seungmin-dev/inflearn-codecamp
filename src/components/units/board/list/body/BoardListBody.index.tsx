import Link from "next/link";
import * as S from "./BoardListBody.styles";
import { v4 as uuidv4 } from "uuid";
import type { IQuery } from "../../../../../commons/types/generated/types";

interface IBoardListBodyProps {
  keyword: string;
  data: Pick<IQuery, "fetchBoards">;
}
export default function BoardListBody(props: IBoardListBodyProps): JSX.Element {
  return (
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
  );
}
