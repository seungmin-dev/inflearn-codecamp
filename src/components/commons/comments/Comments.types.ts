import type {
  IBoardComment,
  IUseditemQuestion,
} from "../../../commons/types/generated/types";

type IcommentBoardProps = Omit<IBoardComment, "deletedAt" | "createdAt">;
// type IcommentMarketProps = Omit<
//   IBoardComment,
//   "deletedAt" | "createdAt" | "rating"
// >;
type IcommentMarketProps = Omit<IUseditemQuestion, "deletedAt" | "createdAt">;

export interface ICommentFormProps {
  writer?: string;
  contents: string;
  rating?: number;
  password?: string;
}

export type { IcommentBoardProps, IcommentMarketProps };
