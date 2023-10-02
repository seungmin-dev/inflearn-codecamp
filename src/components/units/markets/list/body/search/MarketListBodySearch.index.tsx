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
          <img src="/images/icons/3d-discount.png" />
          <S.SearchOptText>판매 중인 상품</S.SearchOptText>
        </S.SearchOpt>
        <S.SearchOpt
          onClick={onClickIsSoldout(true)}
          isSelected={isSelectedSold}
        >
          <img src="/images/icons/3d-target.png" />
          <S.SearchOptText>판매된 상품</S.SearchOptText>
        </S.SearchOpt>
      </S.SearchTab>
      <S.SearchInputBox>
        <S.SearchIcon />
        <S.SearchInput
          type="text"
          onChange={props.onChangeSearch}
          placeholder="제품을 검색해주세요."
        />
      </S.SearchInputBox>
    </S.SearchWrapper>
  );
};
