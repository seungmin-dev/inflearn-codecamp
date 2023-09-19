import { v4 as uuidv4 } from "uuid";
import * as S from "./MarketListBest.styles";
import { replaceNumberComma } from "../../../../commons/libraries/utils";
import Link from "next/link";

interface IMarketListBestProps {
  data: any;
}
export default function MarketListBest(
  props: IMarketListBestProps,
): JSX.Element {
  return (
    <S.Wrapper>
      {props.data.map((el) => (
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
