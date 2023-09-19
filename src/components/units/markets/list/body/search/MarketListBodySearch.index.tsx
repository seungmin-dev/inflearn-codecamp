import type { ChangeEvent } from "react";
import { useState } from "react";
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
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const MarketListBodySearch = (
  props: IMarketSearchProps,
): JSX.Element => {
  const [isSelectedNotSold, setIsSelectedNotSold] = useState(true);
  const [isSelectedSold, setIsSelectedSold] = useState(false);

  const onClickIsSoldout = (boolean: boolean) => () => {
    setIsSelectedNotSold(!boolean);
    setIsSelectedSold(boolean);
    void props.refetch({ isSoldout: boolean });
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
      {/* <S.SearchInputs> */}
      <S.SearchInputBox>
        <S.SearchIcon />
        <S.SearchInput
          type="text"
          onChange={props.onChangeSearch}
          placeholder="제품을 검색해주세요."
        />
      </S.SearchInputBox>
      {/* <S.SearchDate /> */}
      {/* <S.SearchButton onClick={onClickSearch}>검색</S.SearchButton> */}
      {/* </S.SearchInputs> */}
    </S.SearchWrapper>
  );
};
