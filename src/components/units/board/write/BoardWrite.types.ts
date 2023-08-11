import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

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
  onChangeZipcode: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  isOpen: boolean;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  zipcode: string;
  address: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
