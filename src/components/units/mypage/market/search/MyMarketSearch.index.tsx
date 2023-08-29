import type { Dispatch, SetStateAction } from "react";
import { useRef, useState } from "react";
import * as S from "./MyMarketSearch.styles";

interface IMyMarketSearch {
  setSelectedOpt: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
}
export const MyMarketSearch = (props: IMyMarketSearch): JSX.Element => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [isSelectedISold, setIsSelectedISold] = useState(true);
  const [isSelectedIPick, setIsSelectedIPick] = useState(false);

  const onClickOpt = (boolean: boolean) => () => {
    setIsSelectedISold(!boolean);
    setIsSelectedIPick(boolean);
    if (!boolean) props.setSelectedOpt("sold");
    else props.setSelectedOpt("pick");
  };
  const onClickSearch = (): void => {
    props.setSearch(searchRef.current.value);
  };

  return (
    <S.SearchWrapper>
      <S.SearchTab>
        <S.SearchOpt onClick={onClickOpt(false)} isSelected={isSelectedISold}>
          나의상품
        </S.SearchOpt>
        <S.SearchOpt onClick={onClickOpt(true)} isSelected={isSelectedIPick}>
          마이찜
        </S.SearchOpt>
      </S.SearchTab>
      <S.SearchInputs>
        <S.SearchInputBox>
          <S.SearchIcon />
          <S.SearchInput
            type="text"
            ref={searchRef}
            placeholder="필요한 내용을 검색해주세요."
          />
        </S.SearchInputBox>
        <S.SearchButton onClick={onClickSearch}>검색</S.SearchButton>
      </S.SearchInputs>
    </S.SearchWrapper>
  );
};
