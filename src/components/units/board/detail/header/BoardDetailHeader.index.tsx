import { Skeleton } from "@mui/material";
import * as S from "../BoardDetail.styles";
import { Tooltip } from "antd";
import type { IQuery } from "../../../../../commons/types/generated/types";
import { getDate } from "../../../../../commons/libraries/utils";

interface IBoardDetailHeaderProps {
  data: Pick<IQuery, "fetchBoard">;
}
export const BoardDetailHeader = (
  props: IBoardDetailHeaderProps,
): JSX.Element => {
  console.log(props.data?.fetchBoard);
  const onClickLink = (): void => {
    void navigator.clipboard.writeText(window.location.href);
  };
  return (
    <S.HeaderWrapper>
      {!props.data ? (
        <Skeleton
          variant="circular"
          width={48}
          height={48}
          style={{ gridArea: "image" }}
        />
      ) : (
        <S.ProfileImg
          src={`https://storage.googleapis.com/${props.data?.fetchBoard?.user?.picture}`}
          onError={(event) =>
            (event.currentTarget.src = "/images/icons/profile.png")
          }
        />
      )}
      <S.Writer>
        {!props.data ? (
          <Skeleton width={100} style={{ gridArea: "name" }} />
        ) : (
          props.data?.fetchBoard?.writer
        )}
      </S.Writer>
      <S.CreatedAt>
        {!props.data ? (
          <Skeleton width={140} style={{ gridArea: "date" }} />
        ) : (
          `Date : ${getDate(props.data?.fetchBoard?.createdAt)}`
        )}
      </S.CreatedAt>
      <Tooltip placement="top" trigger="click" title="copied!">
        <S.LinkIcon onClick={onClickLink} />
      </Tooltip>
      <Tooltip
        placement="topRight"
        title={`${props.data?.fetchBoard?.boardAddress?.address} ${props.data?.fetchBoard?.boardAddress?.addressDetail}`}
      >
        <S.LocationIcon />
      </Tooltip>
    </S.HeaderWrapper>
  );
};
