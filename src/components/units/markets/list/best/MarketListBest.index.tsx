import { v4 as uuidv4 } from "uuid";
import * as S from "./MarketListBest.styles";
import { replaceNumberComma } from "../../../../commons/libraries/utils";
import { useQueryFetchUsedItemsBest } from "../../../../commons/hooks/queries/useQUeryFetchUseditemsBest";
import Link from "next/link";

export default function MarketListBest(): JSX.Element {
  const { data } = useQueryFetchUsedItemsBest();
  return (
    <S.Wrapper>
      {data?.fetchUseditemsOfTheBest?.slice(0, 4).map((el) => (
        <Link href={`/markets/${el._id}`} key={uuidv4()}>
          <a>
            <S.Card>
              <S.Img
                src={`https://storage.googleapis.com/${el.images[0]}`}
                onError={(event) =>
                  (event.currentTarget.src = "/images/photo-placeholder.png")
                }
              />
              <S.Info>
                <S.Name>{el.name}</S.Name>
                <S.Remarks>{el.remarks}</S.Remarks>
                <S.Price>{replaceNumberComma(el.price)}원</S.Price>
                <S.Heart />
                <S.Count>{el.pickedCount}</S.Count>
              </S.Info>
            </S.Card>
          </a>
        </Link>
      ))}
    </S.Wrapper>
  );
}
