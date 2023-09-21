import * as S from "./MarketCommentsAnswersList.styles";
import { useQueryFetchUseditemQuestionAnswers } from "../../../../../../commons/hooks/queries/useQueryFetchUseditemQuestionAnswers";
import { v4 as uuidv4 } from "uuid";
import { Comment } from "../../../../../commons/comment";

interface IMarketCommentsAnswersProps {
  questionId: string;
}

export const MarketCommentsAnswersList = (
  props: IMarketCommentsAnswersProps,
): JSX.Element => {
  const { data } = useQueryFetchUseditemQuestionAnswers({
    useditemQuestionId: props.questionId,
  });
  return (
    <div>
      {data?.fetchUseditemQuestionAnswers?.map((el) => (
        <S.AnswerWrapper key={uuidv4()}>
          <S.ReplyIcon />
          <Comment
            data={el}
            questionId={props.questionId}
            questionAnswerId={el._id}
            isReply
          />
        </S.AnswerWrapper>
      ))}
    </div>
  );
};
