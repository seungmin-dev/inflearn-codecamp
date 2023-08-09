import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToList: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
}
