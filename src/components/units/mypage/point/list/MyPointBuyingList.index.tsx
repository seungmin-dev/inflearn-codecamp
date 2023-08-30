import { useQueryFetchPointTransactionsOfBuying } from "../../../../commons/hooks/queries/useQueryFetchPointTransactionsOfBuying";
import { v4 as uuidv4 } from "uuid";
import * as S from "./MyPointList.styles";
import {
  getDate,
  replaceNumberComma,
} from "../../../../commons/libraries/utils";
import { useQueryFetchPointTransactionsCountOfBuying } from "../../../../commons/hooks/queries/useQueryFetchPointTransactionsCount";
import { usePagination } from "../../../../commons/hooks/cutoms/usePagination";
import Pagination from "../../../../commons/paginations/Pagination.index";
import { useEffect } from "react";

interface IMyPointBuyingListProps {
  search: string;
}

export const MyPointBuyingList = (
  props: IMyPointBuyingListProps,
): JSX.Element => {
  const { data, refetch } = useQueryFetchPointTransactionsOfBuying();
  const { data: count } = useQueryFetchPointTransactionsCountOfBuying();
  const pagenationArgs = usePagination({
    refetch,
    count: count?.fetchPointTransactionsCountOfBuying,
  });

  useEffect(() => {
    void refetch({ search: props.search, page: 1 });
  }, [props.search]);

  return (
    <S.ListWrapper>
      <S.BuyingListHeader>
        <S.ListHeaderTextDate>거래일</S.ListHeaderTextDate>
        <S.ListHeaderTextTitle>상품명</S.ListHeaderTextTitle>
        <S.ListHeaderTextPrice>거래내역</S.ListHeaderTextPrice>
        <S.ListHeaderTextPrice>거래 후 잔액</S.ListHeaderTextPrice>
        <S.ListHeaderTextPrice>판매자</S.ListHeaderTextPrice>
      </S.BuyingListHeader>
      <S.BuyingListBody>
        {data?.fetchPointTransactionsOfBuying?.map((item) => (
          <S.BuyingListBodyLine key={uuidv4()}>
            <S.ListBodyTextDate>{getDate(item.createdAt)}</S.ListBodyTextDate>
            <S.ListBodyTextTitle>{item.useditem?.name}</S.ListBodyTextTitle>
            <S.ListBodyTextPrice status={item.status}>
              - {replaceNumberComma(item.useditem?.price)}
            </S.ListBodyTextPrice>
            <S.ListBodyTextBalance>
              ￦ {replaceNumberComma(item.balance)}
            </S.ListBodyTextBalance>
            <S.ListBodyTextDate>
              {/* {item.useditem?.seller.name} */}
            </S.ListBodyTextDate>
          </S.BuyingListBodyLine>
        ))}
      </S.BuyingListBody>
      <S.Pagination>
        <Pagination {...pagenationArgs} />
      </S.Pagination>
    </S.ListWrapper>
  );
};
