import { Comment } from "../../../../commons/comment";
import { useQueryIdChecker } from "../../../../commons/hooks/cutoms/useQueryIdChecker";
import { useQueryFetchUseditemQuestions } from "../../../../commons/hooks/queries/useQueryFetchUseditemQuestions";
import { MarketCommentsAnswersList } from "../answers/list/MarketCommentsAnswersList.index";
import * as S from "./MarketCommentsList.styles";
import { v4 as uuidv4 } from "uuid";

export const MarketCommentsList = (): JSX.Element => {
  const { id } = useQueryIdChecker("useditemId");
  const { data } = useQueryFetchUseditemQuestions({
    useditemId: id,
  });
  return (
    <S.Wrapper>
      <S.List>
        {data?.fetchUseditemQuestions?.map((el) => (
          <S.CommentWrapper key={uuidv4()}>
            <Comment questionId={el._id} data={el} />
            <MarketCommentsAnswersList key={uuidv4()} questionId={el._id} />
          </S.CommentWrapper>
        ))}
      </S.List>
    </S.Wrapper>
  );
};
