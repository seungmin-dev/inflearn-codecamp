import { useQueryFetchPointTransactionsOfLoading } from "../../../../../commons/hooks/queries/useQueryFetchPointTransactionsCountOfLoading";
import { v4 as uuidv4 } from "uuid";
import * as S from "./MyPointList.styles";
import { useQueryFetchPointTransactionsCountOfLoading } from "../../../../../commons/hooks/queries/useQueryFetchPointTransactionsCount";
import { usePagination } from "../../../../../commons/hooks/cutoms/usePagination";
import {
  getDate,
  replaceNumberComma,
} from "../../../../../commons/libraries/utils";
import Pagination from "../../../../commons/paginations/Pagination.index";

export const MyPointLoadingList = (): JSX.Element => {
  const { data, refetch } = useQueryFetchPointTransactionsOfLoading();
  const { data: count } = useQueryFetchPointTransactionsCountOfLoading();

  const pagenationArgs = usePagination({
    refetch,
    count: count?.fetchPointTransactionsCountOfLoading,
  });
  return (
    <S.ListWrapper>
      <S.LoadingListHeader>
        <S.ListHeaderTextDate>충전일</S.ListHeaderTextDate>
        <S.ListHeaderTextTitle>결제 ID</S.ListHeaderTextTitle>
        <S.ListHeaderTextPrice>충전내역</S.ListHeaderTextPrice>
        <S.ListHeaderTextBalance>충전 후 잔액</S.ListHeaderTextBalance>
      </S.LoadingListHeader>
      <S.LoadingListBody>
        {data?.fetchPointTransactionsOfLoading?.map((item) => (
          <S.LoadingListBodyLine key={uuidv4()}>
            <S.ListBodyTextDate>{getDate(item.createdAt)}</S.ListBodyTextDate>
            <S.ListBodyTextTitle>{item.impUid}</S.ListBodyTextTitle>
            <S.ListBodyTextPrice status={item.status}>
              + {replaceNumberComma(item.amount)}
            </S.ListBodyTextPrice>
            <S.ListBodyTextBalance>
              ￦ {replaceNumberComma(item.balance)}
            </S.ListBodyTextBalance>
          </S.LoadingListBodyLine>
        ))}
      </S.LoadingListBody>
      <S.Pagination>
        <Pagination {...pagenationArgs} />
      </S.Pagination>
    </S.ListWrapper>
  );
};
