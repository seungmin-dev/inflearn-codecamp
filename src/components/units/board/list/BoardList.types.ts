import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  isLike: boolean;
  onClickLike: () => void;
  data?: Pick<IQuery, "fetchBoards">;
}
