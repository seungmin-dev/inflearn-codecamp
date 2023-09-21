import { Skeleton } from "@mui/material";
import * as S from "./MarketListBody.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import type { IQuery } from "../../../../../commons/types/generated/types";
import Link from "next/link";
import { useApolloClient } from "@apollo/client";
import { FETCH_USEDITEM } from "../../../../../commons/hooks/queries/useQueryFetchUseditem";
import _ from "lodash";
import { replaceNumberComma } from "../../../../../commons/libraries/utils";

interface IMarketListProps {
  data: Pick<IQuery, "fetchUseditems">;
  onLoadMore: () => void;
  keyword: string;
}

export const MarketListBodyList = (props: IMarketListProps): JSX.Element => {
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
    <S.List>
      {!props.data ? (
        ""
      ) : (
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditems?.map((el) => (
            <S.Row key={uuidv4()}>
              {!el ? (
                <Skeleton
                  variant="rectangular"
                  width={160}
                  height={160}
                  style={{ gridArea: "image" }}
                />
              ) : (
                <S.ItemImg
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  onError={(event) =>
                    (event.currentTarget.src = "/images/photo-placeholder.png")
                  }
                />
              )}
              <S.Name onMouseOver={prefetchPage(el._id)}>
                <Link href={`/markets/${el._id}`}>
                  <a>
                    {!el ? (
                      <Skeleton width={250} />
                    ) : (
                      el.name
                        .replaceAll(props.keyword, `!@#$${props.keyword}!@#$`)
                        .split("!@#$")
                        .map((el) => (
                          <span
                            key={uuidv4()}
                            style={{
                              color: props.keyword === el ? "#ffd600" : "black",
                            }}
                          >
                            {el}
                          </span>
                        ))
                    )}
                  </a>
                </Link>
              </S.Name>
              <S.Remarks>
                {!el ? <Skeleton width={200} /> : el.remarks}
              </S.Remarks>
              <S.Tags>{!el ? <Skeleton width={150} /> : el.tags}</S.Tags>
              <S.Price>
                {!el ? <Skeleton width={100} /> : replaceNumberComma(el.price)}
                <S.EuroMark />
              </S.Price>
              <S.Seller>
                {!el ? (
                  <Skeleton
                    variant="circular"
                    width={26}
                    height={26}
                    style={{ marginRight: "8px" }}
                  />
                ) : (
                  <S.SellerPic
                    src={`https://storage.googleapis.com/${el.seller?.picture}`}
                    onError={(event) =>
                      (event.currentTarget.src = "/images/icons/profile.png")
                    }
                  />
                )}
                {!el ? <Skeleton width={70} /> : el.seller?.name}
              </S.Seller>
              <S.Count>
                <S.Heart />
                {!el ? <Skeleton width={30} /> : el.pickedCount}
              </S.Count>
            </S.Row>
          ))}
        </InfiniteScroll>
      )}
    </S.List>
  );
};
