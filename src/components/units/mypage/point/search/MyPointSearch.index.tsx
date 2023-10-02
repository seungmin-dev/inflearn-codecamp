import { useRef, type Dispatch, type SetStateAction } from "react";
import * as S from "./MyPointSearch.styles";

interface IMyMarketSearch {
  selectedOpt: string;
  setSelectedOpt: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
}
export const MyPointSearch = (props: IMyMarketSearch): JSX.Element => {
  const searchRef = useRef<HTMLInputElement>(null);
  const onClickOpt = (id: string) => () => {
    props.setSearch("");
    if (searchRef.current !== null) searchRef.current.value = "";
    props.setSelectedOpt(id);
  };
  const onClickSearch = (): void => {
    props.setSearch(searchRef.current.value);
  };
  return (
    <S.SearchWrapper>
      <S.SearchTab>
        <S.SearchOpt
          onClick={onClickOpt("all")}
          isSelected={props.selectedOpt === "all"}
        >
          <img src="/images/icons/3d-folder.png" />
          전체내역
        </S.SearchOpt>
        <S.SearchOpt
          onClick={onClickOpt("loading")}
          isSelected={props.selectedOpt === "loading"}
        >
          <img src="/images/icons/3d-fire.png" />
          충전내역
        </S.SearchOpt>
        <S.SearchOpt
          onClick={onClickOpt("buying")}
          isSelected={props.selectedOpt === "buying"}
        >
          <img src="/images/icons/3d-report.png" />
          구매내역
        </S.SearchOpt>
        <S.SearchOpt
          onClick={onClickOpt("selling")}
          isSelected={props.selectedOpt === "selling"}
        >
          <img src="/images/icons/3d-calculator.png" />
          판매내역
        </S.SearchOpt>
      </S.SearchTab>
      {props.selectedOpt === "buying" || props.selectedOpt === "selling" ? (
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
      ) : (
        ""
      )}
    </S.SearchWrapper>
  );
};
