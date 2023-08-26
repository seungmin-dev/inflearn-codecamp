import * as S from "./MarketCommentsAnswersList.styles";
import { Comment } from "../../../../../commons/comment";
import { useQueryFetchUseditemQuestionAnswers } from "../../../../../commons/hooks/queries/useQueryFetchUseditemQuestionAnswers";
import { v4 as uuidv4 } from "uuid";

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
          <S.Row>
            <Comment data={el} />
          </S.Row>
        </S.AnswerWrapper>
      ))}
    </div>
  );
};
