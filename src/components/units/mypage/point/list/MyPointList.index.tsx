import { useQueryFetchPointTransactions } from "../../../../commons/hooks/queries/useQueryFetchPointTransactions";
import { v4 as uuidv4 } from "uuid";
import * as S from "./MyPointList.styles";
import {
  getDate,
  replaceNumberComma,
} from "../../../../commons/libraries/utils";

export const MyPointList = (): JSX.Element => {
  const { data } = useQueryFetchPointTransactions();

  return (
    <S.ListWrapper>
      <S.ListHeader>
        <S.ListHeaderTextIndex>날짜</S.ListHeaderTextIndex>
        <S.ListHeaderTextTitle>내용</S.ListHeaderTextTitle>
        <S.ListHeaderTextPrice>거래 및 충전 내역</S.ListHeaderTextPrice>
        <S.ListHeaderTextBalance>잔액</S.ListHeaderTextBalance>
      </S.ListHeader>
      <S.ListBody>
        {data?.fetchPointTransactions?.map((item) => (
          <S.ListBodyLine key={uuidv4()}>
            <S.ListBodyTextTitle>{getDate(item.createdAt)}</S.ListBodyTextTitle>
            <S.ListBodyTextStatus status={item.status}>
              {item.status}
            </S.ListBodyTextStatus>
            <S.ListBodyTextPrice status={item.status}>
              {replaceNumberComma(
                !item.amount.toString().startsWith("-")
                  ? "+" + item.amount.toString()
                  : item.amount,
              )}
            </S.ListBodyTextPrice>
            <S.ListBodyTextBalance>
              ￦ {replaceNumberComma(item.balance)}
            </S.ListBodyTextBalance>
          </S.ListBodyLine>
        ))}
      </S.ListBody>
    </S.ListWrapper>
  );
};
