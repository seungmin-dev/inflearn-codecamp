import { v4 as uuidv4 } from "uuid";
import * as S from "./ViewItemList.styles";
import Link from "next/link";
import { replaceNumberComma } from "../../../commons/libraries/utils";

interface IViewItemProps {
  el: {
    id: string;
    name: string;
    image: string;
    remarks: string;
    price: number;
    pickedCount: number;
    tags: [string];
  };
}

export const ViewItem = (props: IViewItemProps): JSX.Element => {
  return (
    <Link href={`/markets/${props.el?.id}`}>
      <a>
        <S.Item>
          <S.CountWrapper>
            <S.ItemLike>{props.el?.pickedCount}</S.ItemLike>
            <S.ItemHeart />
          </S.CountWrapper>
          <S.ItemImage
            src={`https://storage.googleapis.com/${props.el?.image}`}
            onError={(event) =>
              (event.currentTarget.src = "/images/photo-placeholder.png")
            }
          />
          <S.ItemTitle>{props.el?.name}</S.ItemTitle>
          <S.ItemRemarks>{props.el?.remarks}</S.ItemRemarks>
          <S.ItemPrice>{replaceNumberComma(props.el?.price)}</S.ItemPrice>
          {props.el?.tags.map((tag: string) => (
            <S.ItemTags key={uuidv4()}>
              {tag.startsWith("#") ? tag : "#" + tag}&nbsp;
            </S.ItemTags>
          ))}
        </S.Item>
      </a>
    </Link>
  );
};
