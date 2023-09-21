import { useQueryFetchPointTransactionsOfSelling } from "../../../../../commons/hooks/queries/useQueryFetchPointTransactionsOfSelling";
import { v4 as uuidv4 } from "uuid";
import * as S from "./MyPointList.styles";
import Link from "next/link";
import { useQueryFetchPointTransactionsCountOfSelling } from "../../../../../commons/hooks/queries/useQueryFetchPointTransactionsCount";
import { usePagination } from "../../../../../commons/hooks/cutoms/usePagination";
import { useEffect } from "react";
import {
  getDate,
  replaceNumberComma,
} from "../../../../../commons/libraries/utils";
import Pagination from "../../../../commons/paginations/Pagination.index";

interface IMyPointSellingListProps {
  search: string;
}

export const MyPointSellingList = (
  props: IMyPointSellingListProps,
): JSX.Element => {
  const { data, refetch } = useQueryFetchPointTransactionsOfSelling();
  const { data: count } = useQueryFetchPointTransactionsCountOfSelling();

  const pagenationArgs = usePagination({
    refetch,
    count: count?.fetchPointTransactionsCountOfSelling,
  });

  useEffect(() => {
    void refetch({ page: 1, search: props.search });
  }, [props.search]);

  return (
    <S.ListWrapper>
      <S.SellingListHeader>
        <S.ListHeaderTextDate>날짜</S.ListHeaderTextDate>
        <S.ListHeaderTextTitle>내용</S.ListHeaderTextTitle>
        <S.ListHeaderTextPrice>거래내역</S.ListHeaderTextPrice>
        <S.ListHeaderTextBalance>잔액</S.ListHeaderTextBalance>
      </S.SellingListHeader>
      <S.SellingListBody>
        {data?.fetchPointTransactionsOfSelling?.map((item) => (
          <S.SellingListBodyLine key={uuidv4()}>
            <S.ListBodyTextDate>{getDate(item.createdAt)}</S.ListBodyTextDate>
            <S.ListBodyTextTitle>
              <Link href={`/markets/${item._id}`}>
                <a>{item.useditem?.name}</a>
              </Link>
            </S.ListBodyTextTitle>
            <S.ListBodyTextPrice status={item.status}>
              +{replaceNumberComma(item.amount)}
            </S.ListBodyTextPrice>
            <S.ListBodyTextBalance>
              ￦ {replaceNumberComma(item.balance)}
            </S.ListBodyTextBalance>
          </S.SellingListBodyLine>
        ))}
      </S.SellingListBody>
      <S.Pagination>
        <Pagination {...pagenationArgs} />
      </S.Pagination>
    </S.ListWrapper>
  );
};
