import { useQueryIdChecker } from "../../../../commons/hooks/cutoms/useQueryIdChecker";
import { useQueryFetchUseditemQuestions } from "../../../../commons/hooks/queries/useQueryFetchUseditemQuestions";
import { getDate } from "../../../../commons/libraries/utils";
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
          <S.Row key={uuidv4()}>
            <S.UserPic src={`/images/icons/profile.png`} />
            <S.UserName>{el.user.name}</S.UserName>
            <S.Contents>{el.contents}</S.Contents>
            <S.CommentDate>{getDate(el.createdAt)}</S.CommentDate>
          </S.Row>
        ))}
      </S.List>
    </S.Wrapper>
  );
};
