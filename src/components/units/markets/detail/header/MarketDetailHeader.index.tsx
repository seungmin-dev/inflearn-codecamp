import { Tooltip } from "antd";
import * as S from "./MarketDetailHeader.styles";
import type { IQuery } from "../../../../../commons/types/generated/types";
import { getDate } from "../../../../commons/libraries/utils";

interface IMarketDetailHeaderProps {
  data: Pick<IQuery, "fetchUseditem">;
}

export default function MarketDetailHeader(
  props: IMarketDetailHeaderProps,
): JSX.Element {
  return (
    <S.Wrapper>
      <S.SellerPic
        src={
          props.data?.fetchUseditem?.seller.picture
            ? `https://storage.googleapis.com/${props.data?.fetchUseditem.seller.picture}`
            : "/images/icons/profile.png"
        }
      />
      <S.SellerName>{props.data?.fetchUseditem?.seller.name}</S.SellerName>
      <S.Date>Date : {getDate(props.data?.fetchUseditem?.createdAt)}</S.Date>
      <S.LinkIcon />
      <Tooltip
        placement="topRight"
        title={`${props.data?.fetchUseditem?.useditemAddress?.address} ${props.data?.fetchUseditem?.useditemAddress?.addressDetail}`}
      >
        <S.LocationIcon />
      </Tooltip>
    </S.Wrapper>
  );
}
