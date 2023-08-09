import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  data?: Pick<IQuery, "fetchBoard">;
  writerError: string;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  passwordError: string;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  titleError: string;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contentsError: string;
  onClickUpdate: () => void;
  onClickSubmit: () => void;
  isActive: boolean;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
