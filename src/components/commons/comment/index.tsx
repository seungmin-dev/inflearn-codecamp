import type {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../commons/types/generated/types";
import { getDate } from "../libraries/utils";
import * as S from "./styles";

interface ICommentProps {
  data: IUseditemQuestion | IUseditemQuestionAnswer;
}

export const Comment = (props: ICommentProps): JSX.Element => {
  return (
    <>
      <S.UserPic
        src={`https://storage.googleapis.com/${props.data.user.picture}`}
        onError={(event) =>
          (event.currentTarget.src = "/images/icons/profile.png")
        }
      />
      <S.UserName>{props.data.user.name}</S.UserName>
      <S.Contents>{props.data.contents}</S.Contents>
      <S.CommentDate>{getDate(props.data.createdAt)}</S.CommentDate>
    </>
  );
};
