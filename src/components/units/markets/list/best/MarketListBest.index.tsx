import { v4 as uuidv4 } from "uuid";
import * as S from "./MarketListBest.styles";
import Link from "next/link";
import { useApolloClient } from "@apollo/client";
import { FETCH_USEDITEM } from "../../../../../commons/hooks/queries/useQueryFetchUseditem";
import _ from "lodash";
import { replaceNumberComma } from "../../../../../commons/libraries/utils";
import { Carousel } from "antd";

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
      <S.CarouselWrapper>
        {props.data && props.data.length === 4 ? (
          <Carousel>
            {props.data.map((el) => (
              <div key={uuidv4()}>
                <S.Card>
                  <S.ImgWrapper>
                    <S.Img
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  </S.ImgWrapper>
                  <S.Info>
                    <S.Name>{el.name}</S.Name>
                    <S.Remarks>{el.remarks}</S.Remarks>
                    <S.Price>{replaceNumberComma(el.price)}원</S.Price>
                    <S.Heart />
                    <S.Count>{el.pickedCount}</S.Count>
                    <Link href={`/markets/${el._id}`}>
                      <S.Button onMouseOver={prefetchPage(el._id)}>
                        보러가기 →
                      </S.Button>
                    </Link>
                  </S.Info>
                </S.Card>
              </div>
            ))}
          </Carousel>
        ) : (
          <div />
        )}
      </S.CarouselWrapper>
      <Link href="/markets/new">
        <S.NewWrapper>
          <S.ButtonTitle>상품 판매하기</S.ButtonTitle>
          <S.ButtonText>어떤 상품을 판매해볼까요?</S.ButtonText>
          <img src="/images/icons/3d-wallet.png" />
        </S.NewWrapper>
      </Link>
    </S.Wrapper>
  );
}
