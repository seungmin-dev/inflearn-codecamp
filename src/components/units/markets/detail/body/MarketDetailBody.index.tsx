import * as S from "./MarketDetailBody.styles";
import type { IQuery } from "../../../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
import { useMutationToggleUseditemPick } from "../../../../../commons/hooks/mutations/useMutationToggleUseditemPick";
import { Skeleton } from "@mui/material";
import { useRecoilState } from "recoil";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { userInfoState } from "../../../../../commons/stores";
import { replaceNumberComma } from "../../../../../commons/libraries/utils";
import Map from "../../../../commons/map";
import { useEffect } from "react";

interface IMarketDetailBodyProps {
  data: Pick<IQuery, "fetchUseditem">;
}

export default function MarketDetailBody(
  props: IMarketDetailBodyProps,
): JSX.Element {
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoState);
  const [toggleHeart] = useMutationToggleUseditemPick();
  const onClickHeart = async (): Promise<void> => {
    if (!userInfo.id) {
      Modal.error({ content: "찜 기능은 로그인 후 이용 가능합니다." });
      void router.push("/login");
    }
    await toggleHeart({
      variables: { useditemId: props.data?.fetchUseditem?._id },
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
        <S.Remarks>
          {!props.data ? (
            <Skeleton width={200} />
          ) : (
            props.data?.fetchUseditem.remarks
          )}
        </S.Remarks>
        <S.Name>
          {!props.data ? (
            <Skeleton width={300} />
          ) : (
            props.data?.fetchUseditem.name
          )}
        </S.Name>
        <S.HeartIcon onClick={onClickHeart} />
        <S.Count>
          {!props.data ? (
            <Skeleton
              width={50}
              style={{ gridArea: "count", margin: "0 auto" }}
            />
          ) : (
            props.data?.fetchUseditem.pickedCount
          )}
        </S.Count>
        <S.Price>
          {!props.data ? (
            <Skeleton width={150} />
          ) : (
            `${replaceNumberComma(props.data?.fetchUseditem.price)}원`
          )}
        </S.Price>
      </S.ItemInfoWrapper>
      {!props.data ? (
        <Skeleton
          variant="rectangular"
          width={600}
          height={400}
          style={{ margin: "50px auto" }}
        />
      ) : (
        <S.ItemCarousel>
          {props.data?.fetchUseditem?.images.map((el) => (
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
      )}
      {typeof window !== "undefined" ? (
        !props.data ? (
          <>
            <Skeleton width={500} />
            <Skeleton width={350} />
            <Skeleton width={430} style={{ marginBottom: "40px" }} />
          </>
        ) : (
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          />
        )
      ) : (
        <div></div>
      )}
      <S.Tags>
        {!props.data ? (
          <Skeleton width={200} />
        ) : (
          props.data?.fetchUseditem.tags.map((el) => (
            <S.Tag key={uuidv4()}>{el.startsWith("#") ? el : "#" + el}</S.Tag>
          ))
        )}
      </S.Tags>
      {!props.data ? (
        <Skeleton
          variant="rectangular"
          width={800}
          height={550}
          style={{ marginTop: "70px" }}
        />
      ) : (
        <div style={{ width: "100%", height: "550px", marginTop: "70px" }}>
          <Map
            lat={props.data?.fetchUseditem.useditemAddress?.lat}
            lon={props.data?.fetchUseditem.useditemAddress?.lng}
          />
        </div>
      )}
    </S.Wrapper>
  );
}
