import type { ChangeEvent } from "react";

export interface ISearchbarProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
