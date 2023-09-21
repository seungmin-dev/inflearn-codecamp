import { v4 as uuidv4 } from "uuid";
import * as S from "./MarketListBest.styles";
import Link from "next/link";
import { useApolloClient } from "@apollo/client";
import { FETCH_USEDITEM } from "../../../../../commons/hooks/queries/useQueryFetchUseditem";
import _ from "lodash";
import { replaceNumberComma } from "../../../../../commons/libraries/utils";

interface IMarketListBestProps {
  data: any;
}
export default function MarketListBest(
  props: IMarketListBestProps,
): JSX.Element {
  const client = useApolloClient();

  const getDebounce = _.debounce((useditemId) => {
    void client.query({
      query: FETCH_USEDITEM,
      variables: { useditemId },
    });
  }, 300);

  const prefetchPage = (boardId: string) => async () => {
    getDebounce(boardId);
  };
  return (
    <S.Wrapper>
      {props.data.map((el) => (
        <Link href={`/markets/${el._id}`} key={uuidv4()}>
          <a>
            <S.Card onMouseOver={prefetchPage(el._id)}>
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
