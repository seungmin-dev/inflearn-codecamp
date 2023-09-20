import { Skeleton } from "@mui/material";
import * as S from "../BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { Tooltip } from "antd";
import type { IQuery } from "../../../../../commons/types/generated/types";

interface IBoardDetailHeaderProps {
  data: Pick<IQuery, "fetchBoard">;
}
export const BoardDetailHeader = (
  props: IBoardDetailHeaderProps,
): JSX.Element => {
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
        {!props.data ? <Skeleton /> : props.data?.fetchBoard?.writer}
      </S.Writer>
      <S.CreatedAt>
        Date :{" "}
        {!props.data ? (
          <Skeleton />
        ) : (
          getDate(props.data?.fetchBoard?.createdAt)
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
