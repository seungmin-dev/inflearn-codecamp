import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import type { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  item?: IBoardComment;
}
export interface ICommentWriteUIProps {
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
  inputs: { writer: string; password: string; contents: string };
  setStar: Dispatch<SetStateAction<number>>;
  isEdit: boolean;
  item: IBoardComment;
}
