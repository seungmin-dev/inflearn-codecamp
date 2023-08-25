import * as S from "./MarketDetailBody.styles";
import type { IQuery } from "../../../../../commons/types/generated/types";
import { replaceNumberComma } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import Map from "../../../../commons/map";

interface IMarketDetailBodyProps {
  data: Pick<IQuery, "fetchUseditem">;
}

export default function MarketDetailBody(
  props: IMarketDetailBodyProps,
): JSX.Element {
  return (
    <S.Wrapper>
      <S.ItemInfoWrapper>
        <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
        <S.Name>{props.data?.fetchUseditem.name}</S.Name>
        <S.HeartIcon />
        <S.Count>{props.data?.fetchUseditem.pickedCount}</S.Count>
        <S.Price>
          {replaceNumberComma(props.data?.fetchUseditem.price)}원
        </S.Price>
      </S.ItemInfoWrapper>
      <S.ItemCarousel>
        {props.data?.fetchUseditem.images.map((el) => (
          <div key={uuidv4()}>
            <img src={`https://storage.googleapis.com/${el}`} />
          </div>
        ))}
      </S.ItemCarousel>
      <S.Contents>{props.data?.fetchUseditem.contents}</S.Contents>
      <S.Tags>
        {props.data?.fetchUseditem.tags.map((el) => (
          <S.Tag key={uuidv4()}>#{el}</S.Tag>
        ))}
      </S.Tags>
      <Map
        lat={props.data?.fetchUseditem.useditemAddress?.lat}
        lon={props.data?.fetchUseditem.useditemAddress?.lng}
      />
    </S.Wrapper>
  );
}
