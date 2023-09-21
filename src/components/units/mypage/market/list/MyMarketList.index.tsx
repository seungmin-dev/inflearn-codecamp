import Link from "next/link";
import * as S from "./MyMarketList.styles";
import type { IQuery } from "../../../../../commons/types/generated/types";
import {
  getDate,
  replaceNumberComma,
} from "../../../../../commons/libraries/utils";
interface IMyMarketListProps {
  data: Pick<IQuery, "fetchUseditemsISold">;
}
export const MyMarketList = (props: IMyMarketListProps): JSX.Element => {
  return (
    <S.ListWrapper>
      <S.ListHeader>
        <S.ListHeaderTextIndex>번호</S.ListHeaderTextIndex>
        <S.ListHeaderTextTitle>상품명</S.ListHeaderTextTitle>
        <S.ListHeaderTextStatus></S.ListHeaderTextStatus>
        <S.ListHeaderTextPrice>판매가격</S.ListHeaderTextPrice>
        <S.ListHeaderTextDate>날짜</S.ListHeaderTextDate>
      </S.ListHeader>
      <S.ListBody>
        {props.data?.fetchUseditemsISold?.map((item, index: number) => (
          <S.ListBodyLine key={item._id}>
            <S.ListBodyTextIndex>{index + 1}</S.ListBodyTextIndex>
            <Link href={`/markets/${item._id}`}>
              <S.ListBodyTextTitle>{item.name}</S.ListBodyTextTitle>
            </Link>
            <S.ListBodyTextStatus>
              {item.buyer ? "판매완료" : ""}
            </S.ListBodyTextStatus>
            <S.ListBodyTextPrice>
              ￦{replaceNumberComma(item.price)}
            </S.ListBodyTextPrice>
            <S.ListBodyTextDate>{getDate(item.createdAt)}</S.ListBodyTextDate>
          </S.ListBodyLine>
        ))}
      </S.ListBody>
    </S.ListWrapper>
  );
};
