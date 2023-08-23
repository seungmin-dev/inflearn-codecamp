import { SearchWrapper, SearchInput } from "./Searchbars.styles";
import type { ISearchbarProps } from "./Searchbars.types";

export default function Searchbars(props: ISearchbarProps): JSX.Element {
  return (
    <SearchWrapper>
      <SearchInput
        onChange={props.onChangeSearch}
        placeholder="제목을 검색해주세요."
      />
    </SearchWrapper>
  );
}
