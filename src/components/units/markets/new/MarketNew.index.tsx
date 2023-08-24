import { useForm } from "react-hook-form";
import * as S from "./MarketNew.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { ItemFormSchema } from "../../../commons/validation/yup";
import { useMutationCraeteUseditem } from "../../../commons/hooks/mutations/useMutationCreateUseditem";
import { useRouter } from "next/router";
import type { IQuery } from "../../../../commons/types/generated/types";

interface IItemFormProps {
  name: string;
  remarks: string;
  contents: string;
  price: string;
  tags: string;
}
interface IMarketNewProps {
  isEdit?: boolean;
  data: Pick<IQuery, "fetchUseditem">;
}
export default function MarketNew(props: IMarketNewProps): JSX.Element {
  const router = useRouter();
  const [createUseditem] = useMutationCraeteUseditem();
  const { register, handleSubmit, formState } = useForm<IItemFormProps>({
    resolver: yupResolver(ItemFormSchema),
    mode: "onSubmit",
  });
  const onValid = async (data: IItemFormProps): Promise<void> => {
    const tagsArr = [];
    data.tags.split(" ").forEach((el) => tagsArr.push(el));
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: tagsArr,
          },
        },
      });
      void router.push(`/markets/${result.data.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <S.Wrapper>
      <S.Title>상품 {props.isEdit ? "수정" : "등록"}하기</S.Title>
      <S.Form onSubmit={handleSubmit(onValid)}>
        <S.InputSet>
          <S.SmallTitle>상품명</S.SmallTitle>
          <S.Input
            type="text"
            {...register("name")}
            placeholder="상품명을 작성해주세요."
            defaultValue={props.data?.fetchUseditem?.name}
          />
          <S.ErrorMessage>{formState.errors?.name?.message}</S.ErrorMessage>
        </S.InputSet>
        <S.InputSet>
          <S.SmallTitle>한줄요약</S.SmallTitle>
          <S.Input
            type="text"
            {...register("remarks")}
            placeholder="상품 정보를 요약해주세요."
            defaultValue={props.data?.fetchUseditem?.remarks}
          />
          <S.ErrorMessage>{formState.errors?.remarks?.message}</S.ErrorMessage>
        </S.InputSet>
        <S.InputSet>
          <S.SmallTitle>상품설명</S.SmallTitle>
          <S.Input
            type="text"
            {...register("contents")}
            placeholder="상품을 설명해주세요."
            defaultValue={props.data?.fetchUseditem?.contents}
          />
          <S.ErrorMessage>{formState.errors?.contents?.message}</S.ErrorMessage>
        </S.InputSet>
        <S.InputSet>
          <S.SmallTitle>판매가격</S.SmallTitle>
          <S.Input
            type="number"
            {...register("price")}
            placeholder="판매가격을 입력해주세요."
            defaultValue={props.data?.fetchUseditem?.price}
          />
          <S.ErrorMessage>{formState.errors?.price?.message}</S.ErrorMessage>
        </S.InputSet>
        <S.InputSet>
          <S.SmallTitle>태그입력</S.SmallTitle>
          <S.Input
            type="text"
            {...register("tags")}
            placeholder="#태그 #태그 #태그"
            defaultValue={props.data?.fetchUseditem?.tags}
          />
          <S.ErrorMessage>{formState.errors?.tags?.message}</S.ErrorMessage>
        </S.InputSet>
        <S.Button isCompleted={formState.isValid}>등록하기</S.Button>
      </S.Form>
    </S.Wrapper>
  );
}
