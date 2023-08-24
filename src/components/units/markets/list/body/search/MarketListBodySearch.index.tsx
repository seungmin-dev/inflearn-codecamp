import type { Dispatch, SetStateAction } from "react";
import { useRef, useState } from "react";
import * as S from "./MarketListBodySearch.styles";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

interface IMarketSearchProps {
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  setSearch: Dispatch<SetStateAction<string>>;
}
export const MarketListBodySearch = (
  props: IMarketSearchProps,
): JSX.Element => {
  const [isSelectedNotSold, setIsSelectedNotSold] = useState(true);
  const [isSelectedSold, setIsSelectedSold] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const onClickIsSoldout = (boolean: boolean) => () => {
    setIsSelectedNotSold(!boolean);
    setIsSelectedSold(boolean);
    void props.refetch({ isSoldout: boolean });
  };
  const onClickSearch = (): void => {
    props.setSearch(searchRef.current.value);
    void props.refetch({ search: searchRef.current.value, page: 1 });
  };
  return (
    <S.SearchWrapper>
      <S.SearchTab>
        <S.SearchOpt
          onClick={onClickIsSoldout(false)}
          isSelected={isSelectedNotSold}
        >
          판매 중인 상품
        </S.SearchOpt>
        <S.SearchOpt
          onClick={onClickIsSoldout(true)}
          isSelected={isSelectedSold}
        >
          판매된 상품
        </S.SearchOpt>
      </S.SearchTab>
      <S.SearchInputs>
        <S.SearchInputBox>
          <S.SearchIcon />
          <S.SearchInput
            type="text"
            ref={searchRef}
            placeholder="제품을 검색해주세요."
          />
        </S.SearchInputBox>
        <S.SearchDate />
        <S.SearchButton onClick={onClickSearch}>검색</S.SearchButton>
      </S.SearchInputs>
    </S.SearchWrapper>
  );
};
