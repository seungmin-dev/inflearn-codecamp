import { useForm } from "react-hook-form";
import * as S from "./MarketNew.styles";
import type * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutationCraeteUseditem } from "../../../../commons/hooks/mutations/useMutationCreateUseditem";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Modal } from "antd";
import type { IItemFormProps, IMarketNewProps } from "./MarketNew.types";
import { LocationIcon } from "../detail/header/MarketDetailHeader.styles";
import { useEffect, useState } from "react";
import { useMutationUpdateUseditem } from "../../../../commons/hooks/mutations/useMutationUpdateUseditem";
import { ItemFormSchema } from "../../../../commons/validation/yup";
import Map from "../../../commons/map";
import { Upload } from "../../../commons/upload/Upload.index";
import { useMuatationUploadFile } from "../../../../commons/hooks/mutations/useMutationUploadFile";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function MarketNew(props: IMarketNewProps): JSX.Element {
  const router = useRouter();
  const [createUseditem] = useMutationCraeteUseditem();
  const [updateUseditem] = useMutationUpdateUseditem();
  const [uploadFile] = useMuatationUploadFile();

  type ItemData = yup.InferType<typeof ItemFormSchema>;
  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<ItemData>({
      resolver: yupResolver(ItemFormSchema),
      mode: "onSubmit",
    });
  const css = `.ql-editor {min-height: 250px;}`;
  const onValid = async (data: IItemFormProps): Promise<void> => {
    const tagsArr = [];
    data.tags
      .trim()
      .split(" ")
      .forEach((el) => tagsArr.push(el));
    try {
      const results = await Promise.all(
        files.map(async (el) => await uploadFile({ variables: { file: el } })),
      );
      const resultUrls = results.map((el) => el.data?.uploadFile.url);
      if (props.isEdit) {
        const result = await updateUseditem({
          variables: {
            updateUseditemInput: {
              name: data.name,
              remarks: data.remarks,
              contents: data.contents,
              price: Number(data.price),
              tags: tagsArr,
              images: resultUrls,
              useditemAddress: {
                address: data.address,
                addressDetail: data.addressDetail,
                lat: Number(data.lat),
                lng: Number(data.lng),
              },
            },
            useditemId: props.data.fetchUseditem._id,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditems: (prev) => {
                  return [data.updateUseditem, ...prev];
                },
              },
            });
          },
        });
        void router.push(`/markets/${result.data.updateUseditem._id}`);
      } else {
        console.log("data : ", data);
        const result = await createUseditem({
          variables: {
            createUseditemInput: {
              name: data.name,
              remarks: data.remarks,
              contents: data.contents,
              price: Number(data.price),
              tags: tagsArr,
              images: resultUrls,
              useditemAddress: {
                address: data.address,
                addressDetail: data.addressDetail,
                lat: Number(data.lat),
                lng: Number(data.lng),
              },
            },
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditems: (prev) => {
                  return [data.createUseditem, ...prev];
                },
              },
            });
          },
        });
        void router.push(`/markets/${result.data.createUseditem._id}`);
      }
      Modal.success({
        content: `상품이 정상적으로 ${
          props.isEdit ? "수정" : "등록"
        }되었습니다.`,
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const [urls, setUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const onChangeFileUrls = (url: string, file: File, index: number): void => {
    const tempUrls = [...urls];
    tempUrls[index] = url;
    setUrls(tempUrls);

    const tempFiles = [...files];
    tempFiles[index] = file;
    setFiles(tempFiles);
  };
  useEffect(() => {
    const images = props.data?.fetchUseditem.images;
    if (images !== undefined && images !== null) {
      urls.splice(0, images.length);
      setUrls([...images, ...urls]);
    }
  }, [props.data]);

  return (
    <S.Wrapper>
      <style>{css}</style>
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
          <ReactQuill
            onChange={onChangeContents}
            placeholder="상품을 설명해주세요."
            defaultValue={props.data?.fetchUseditem?.contents}
            style={{ minHeight: "100px" }}
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
            defaultValue={props.data?.fetchUseditem?.tags.join(" ")}
          />
          <S.ErrorMessage>{formState.errors?.tags?.message}</S.ErrorMessage>
        </S.InputSet>
        <S.MapWrapper>
          <div>
            <S.SmallTitle>거래위치</S.SmallTitle>
            <Map />
          </div>
          <div>
            <S.SmallTitle>GPS</S.SmallTitle>
            <S.LocateInputs>
              <S.Input
                type="number"
                {...register("lat")}
                placeholder="위도(LAT)"
                defaultValue={props.data?.fetchUseditem?.useditemAddress?.lat}
              />
              <LocationIcon />
              <S.Input
                type="number"
                {...register("lng")}
                placeholder="경도(LNG)"
                defaultValue={props.data?.fetchUseditem?.useditemAddress?.lng}
              />
            </S.LocateInputs>
          </div>
          <div>
            <S.SmallTitle>주소</S.SmallTitle>
            <S.Input
              type="text"
              {...register("address")}
              defaultValue={props.data?.fetchUseditem?.useditemAddress?.address}
            />
            <S.Input
              type="text"
              {...register("addressDetail")}
              defaultValue={
                props.data?.fetchUseditem?.useditemAddress?.addressDetail
              }
            />
          </div>
        </S.MapWrapper>
        <S.InputSet>
          <S.SmallTitle>사진 첨부</S.SmallTitle>
          <div style={{ display: "flex" }}>
            {urls.map((el, index) => (
              <Upload
                key={index}
                index={index}
                el={el}
                isEdit={props.isEdit}
                onChangeFileUrls={onChangeFileUrls}
              />
            ))}
          </div>
        </S.InputSet>
        {/* <S.InputSet>
          <S.SmallTitle>메인 사진 설정</S.SmallTitle>
          <S.Label onClick={onClickRadio} htmlFor="photo1">
            <S.RadioInput
              type="radio"
              defaultChecked
              name="mainPhoto"
              value="photo1"
              id="photo1"
            />
            사진 1
          </S.Label>{" "}
          <S.Label onClick={onClickRadio} htmlFor="photo2">
            <S.RadioInput
              type="radio"
              name="mainPhoto"
              value="photo2"
              id="photo2"
            />
            사진 2
          </S.Label>
        </S.InputSet> */}
        <div style={{ display: "flex" }}>
          <S.Button isCompleted={formState.isValid}>
            {props.isEdit ? "수정" : "등록"}하기
          </S.Button>
        </div>
      </S.Form>
    </S.Wrapper>
  );
}
