import { useQueryFetchUsedItemsBest } from "../../../../commons/hooks/queries/useQUeryFetchUsedItemsBest";
import { v4 as uuidv4 } from "uuid";
import * as S from "./MarketListBest.styles";
import { replaceNumberComma } from "../../../../commons/libraries/utils";

export default function MarketListBest(): JSX.Element {
  const { data } = useQueryFetchUsedItemsBest();
  console.log("bestItems: ", data);
  return (
    <S.Wrapper>
      {data?.fetchUseditemsOfTheBest?.slice(0, 4).map((el) => (
        <S.Card key={uuidv4()}>
          <S.Img src={`https://storage.googleapis.com/${el.images[0]}`} />
          <S.Info>
            <S.Name>{el.name}</S.Name>
            <S.Remarks>{el.remarks}</S.Remarks>
            <S.Price>{replaceNumberComma(el.price)}원</S.Price>
            <S.Heart />
            <S.Count>{el.pickedCount}</S.Count>
          </S.Info>
        </S.Card>
      ))}
    </S.Wrapper>
  );
}
