import type { MouseEvent } from "react";

export interface ILayoutNavigationProps {
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
  currentPage: string;
}
