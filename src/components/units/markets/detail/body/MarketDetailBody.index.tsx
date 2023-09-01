import * as S from "./MarketDetailBody.styles";
import type { IQuery } from "../../../../../commons/types/generated/types";
import { replaceNumberComma } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import Map from "../../../../commons/map";
import Dompurify from "dompurify";
import { useMutationToggleUseditemPick } from "../../../../commons/hooks/mutations/useMutationToggleUseditemPick";

interface IMarketDetailBodyProps {
  data: Pick<IQuery, "fetchUseditem">;
}

export default function MarketDetailBody(
  props: IMarketDetailBodyProps,
): JSX.Element {
  const [toggleHeart] = useMutationToggleUseditemPick();
  const onClickHeart = async (): Promise<void> => {
    await toggleHeart({
      variables: { useditemId: props.data?.fetchUseditem._id },
      update(cache) {
        cache.modify({
          fields: {
            fetchUseditem: (prev, { readField }) => {},
            fetchUseditems: (prev, { readField }) => {},
          },
        });
      },
    });
  };
  return (
    <S.Wrapper>
      <S.ItemInfoWrapper>
        <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
        <S.Name>{props.data?.fetchUseditem.name}</S.Name>
        <S.HeartIcon onClick={onClickHeart} />
        <S.Count>{props.data?.fetchUseditem.pickedCount}</S.Count>
        <S.Price>
          {replaceNumberComma(props.data?.fetchUseditem.price)}원
        </S.Price>
      </S.ItemInfoWrapper>
      <S.ItemCarousel>
        {props.data?.fetchUseditem.images.map((el) => (
          <div key={uuidv4()}>
            <img
              src={`https://storage.googleapis.com/${el}`}
              onError={(event) =>
                (event.currentTarget.src = "/images/photo-placeholder.png")
              }
            />
          </div>
        ))}
      </S.ItemCarousel>
      {typeof window !== "undefined" ? (
        <S.Contents
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
          }}
        />
      ) : (
        <div></div>
      )}
      <S.Tags>
        {props.data?.fetchUseditem.tags.map((el) => (
          <S.Tag key={uuidv4()}>{el.startsWith("#") ? el : "#" + el}</S.Tag>
        ))}
      </S.Tags>
      <div style={{ width: "100%", height: "550px", marginTop: "70px" }}>
        <Map
          lat={props.data?.fetchUseditem.useditemAddress?.lat}
          lon={props.data?.fetchUseditem.useditemAddress?.lng}
        />
      </div>
    </S.Wrapper>
  );
}
