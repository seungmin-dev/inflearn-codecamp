import { Tooltip } from "antd";
import * as S from "./MarketDetailHeader.styles";
import type { IQuery } from "../../../../../commons/types/generated/types";
import { getDate } from "../../../../commons/libraries/utils";
import { Skeleton } from "@mui/material";

interface IMarketDetailHeaderProps {
  data: Pick<IQuery, "fetchUseditem">;
}

export default function MarketDetailHeader(
  props: IMarketDetailHeaderProps,
): JSX.Element {
  const onClickLink = (): void => {
    void navigator.clipboard.writeText(window.location.href);
  };
  return (
    <S.Wrapper>
      {!props.data ? (
        <Skeleton
          variant="circular"
          width={48}
          height={48}
          style={{ gridArea: "image" }}
        />
      ) : (
        <S.SellerPic
          src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.seller?.picture}`}
          onError={(event) =>
            (event.currentTarget.src = "/images/icons/profile.png")
          }
        />
      )}
      <S.SellerName>
        {!props.data ? (
          <Skeleton width={100} style={{ gridArea: "name" }} />
        ) : (
          props.data?.fetchUseditem?.seller?.name
        )}
      </S.SellerName>
      <S.Date>
        {!props.data ? (
          <Skeleton width={140} style={{ gridArea: "date" }} />
        ) : (
          `Date : ${getDate(props.data?.fetchUseditem?.createdAt)}`
        )}
      </S.Date>
      <Tooltip placement="top" trigger="click" title="copied!">
        <S.LinkIcon onClick={onClickLink} />
      </Tooltip>
      <Tooltip
        placement="topRight"
        title={`${props.data?.fetchUseditem?.useditemAddress?.address} ${props.data?.fetchUseditem?.useditemAddress?.addressDetail}`}
      >
        <S.LocationIcon />
      </Tooltip>
    </S.Wrapper>
  );
}
