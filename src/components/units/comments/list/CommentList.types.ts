import type { ChangeEvent, MouseEvent } from "react";
import type {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface ICommentListProps {
  data: Pick<IQuery, "fetchBoardComments">;
  isOpenDeleteModal: boolean;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
}
export interface ICommentListUIItemProps {
  item: IBoardComment;
  onClickOpenDeleteModal?: (event: MouseEvent<HTMLImageElement>) => void;
}
