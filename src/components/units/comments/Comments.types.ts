import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface CommentsUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  comments: string;
  commentsLength: number;
  onChangeTextarea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  data: Pick<IQuery, "fetchBoardComments">;
  isEdit: boolean;
  onChangeUpdateTextarea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  commentsUpdate: string;
  commentsUpdateLength: number;
  onClickEdit: () => void;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
}
