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
import { Upload } from "../../../commons/upload/Upload.index";
import { useMuatationUploadFile } from "../../../../commons/hooks/mutations/useMutationUploadFile";
import EditMap from "../../../commons/map/edit";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function MarketNew(props: IMarketNewProps): JSX.Element {
  const router = useRouter();
  const [createUseditem] = useMutationCraeteUseditem();
  const [updateUseditem] = useMutationUpdateUseditem();
  const [uploadFile] = useMuatationUploadFile();
  const [pickedCoord, setPickedCoord] = useState({ lat: 0, lon: 0 });

  type ItemData = yup.InferType<typeof ItemFormSchema>;
  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<ItemData>({
      resolver: yupResolver(ItemFormSchema),
      mode: "onChange",
    });
  const css = `.ql-editor {min-height: 250px;}`;
  const onValid = async (data: IItemFormProps): Promise<void> => {
    console.log("data : ", typeof data.useditemAddress.lng);
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
                address: data.useditemAddress.address,
                addressDetail: data.useditemAddress.addressDetail,
                lat: Number(data.useditemAddress.lat),
                lng: Number(data.useditemAddress.lng),
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
                address: data.useditemAddress.address,
                addressDetail: data.useditemAddress.addressDetail,
                lat: Number(data.useditemAddress.lat),
                lng: Number(data.useditemAddress.lng),
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
  useEffect(() => {
    setValue("useditemAddress.lat", pickedCoord.lat);
    setValue("useditemAddress.lng", pickedCoord.lon);
  }, [pickedCoord]);

  useEffect(() => {
    setValue("name", props.data?.fetchUseditem?.name);
    setValue("remarks", props.data?.fetchUseditem?.remarks);
    setValue("contents", props.data?.fetchUseditem?.contents);
    setValue("price", props.data?.fetchUseditem?.price);
    setValue(
      "useditemAddress.address",
      props.data?.fetchUseditem?.useditemAddress?.address,
    );
    setValue(
      "useditemAddress.addressDetail",
      props.data?.fetchUseditem?.useditemAddress?.addressDetail,
    );
    setPickedCoord({
      lat: props.data?.fetchUseditem.useditemAddress?.lat,
      lon: props.data?.fetchUseditem.useditemAddress?.lng,
    });
  }, [props.data?.fetchUseditem]);

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
            <EditMap
              setPickedCoord={setPickedCoord}
              lat={props.data?.fetchUseditem?.useditemAddress?.lat}
              lon={props.data?.fetchUseditem?.useditemAddress?.lng}
              isEdit={props.isEdit}
            />
          </div>
          <div>
            <S.SmallTitle>GPS</S.SmallTitle>
            <S.LocateInputs>
              <S.Input
                type="number"
                {...register("useditemAddress.lat")}
                disabled
                placeholder="위도(LAT)"
                defaultValue={props.data?.fetchUseditem?.useditemAddress?.lat}
                value={
                  props.data
                    ? props.data?.fetchUseditem?.useditemAddress?.lat
                    : pickedCoord.lat
                }
              />
              <LocationIcon />
              <S.Input
                type="number"
                {...register("useditemAddress.lng")}
                disabled
                placeholder="경도(LNG)"
                defaultValue={props.data?.fetchUseditem?.useditemAddress?.lng}
                value={
                  props.data
                    ? props.data?.fetchUseditem?.useditemAddress?.lng
                    : pickedCoord.lon
                }
              />
            </S.LocateInputs>
          </div>
          <div>
            <S.SmallTitle>주소</S.SmallTitle>
            <S.Input
              type="text"
              {...register("useditemAddress.address")}
              placeholder="주소"
              defaultValue={props.data?.fetchUseditem?.useditemAddress?.address}
            />
            <S.Input
              type="text"
              {...register("useditemAddress.addressDetail")}
              placeholder="상세주소"
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
        <div style={{ display: "flex" }}>
          <S.Button isCompleted={formState.isValid}>
            {props.isEdit ? "수정" : "등록"}하기
          </S.Button>
        </div>
      </S.Form>
    </S.Wrapper>
  );
}
