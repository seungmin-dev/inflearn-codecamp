import * as S from "./MarketListBody.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import { replaceNumberComma } from "../../../../commons/libraries/utils";
import type { IQuery } from "../../../../../commons/types/generated/types";
import Link from "next/link";

interface IMarketListProps {
  data: Pick<IQuery, "fetchUseditems">;
  onLoadMore: () => void;
  search: string;
}

export const MarketListBodyList = (props: IMarketListProps): JSX.Element => {
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
              <S.ItemImg
                src={`https://storage.googleapis.com/${el.images[0]}`}
                onError={(event) =>
                  (event.currentTarget.src = "/images/photo-placeholder.png")
                }
              />
              <S.Name>
                <Link href={`/markets/${el._id}`}>
                  <a>
                    {el.name
                      .replaceAll(props.search, `!@#$${props.search}!@#$`)
                      .split("!@#$")
                      .map((el) => (
                        <span
                          key={uuidv4()}
                          style={{
                            color: props.search === el ? "#ffd600" : "black",
                          }}
                        >
                          {el}
                        </span>
                      ))}
                  </a>
                </Link>
              </S.Name>
              <S.Remarks>{el.remarks}</S.Remarks>
              <S.Tags>{el.tags}</S.Tags>
              <S.Price>
                <S.EuroMark />
                {replaceNumberComma(el.price)}
              </S.Price>
              <S.Seller>
                <S.SellerPic
                  src={`https://storage.googleapis.com/${el.seller.picture}`}
                  onError={(event) =>
                    (event.currentTarget.src = "/images/icons/profile.png")
                  }
                />
                {el.seller.name}
              </S.Seller>
              <S.Count>
                <S.Heart />
                {el.pickedCount}
              </S.Count>
            </S.Row>
          ))}
        </InfiniteScroll>
      )}
    </S.List>
  );
};
