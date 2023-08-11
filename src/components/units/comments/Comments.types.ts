import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import type { IQuery } from "../../../commons/types/generated/types";

export interface CommentsUIProps {
  data: Pick<IQuery, "fetchBoardComments">;
  comments: string;
  commentsLength: number;
  isEdit: boolean;
  isOpenDeleteModal: boolean;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTextarea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
  onClickEdit: () => void;
  setStar: Dispatch<SetStateAction<number>>;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
