import { useRouter } from "next/router";
import * as S from "./BoardWrite.styles";
import { useEffect, useState } from "react";
import { useMutationCreateBoard } from "../../../../commons/hooks/mutations/useMutationCreateBoard";
import { useMutationUpdateBoard } from "../../../../commons/hooks/mutations/useMutationUpdateBoard";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import type { Address } from "react-daum-postcode";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import type { IQuery } from "../../../../commons/types/generated/types";
import dynamic from "next/dynamic";
import { useMuatationUploadFile } from "../../../../commons/hooks/mutations/useMutationUploadFile";
import { BoardFormSchema } from "../../../../commons/validation/yup";
import { Upload } from "../../../commons/upload/Upload.index";

interface IBoardFormProps {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl: string;
  zipcode: string;
  address: string;
  addressDetail: string;
}
interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
export const BoardWrite = (props: IBoardWriteProps): JSX.Element => {
  const router = useRouter();
  const [createBoard] = useMutationCreateBoard();
  const [updateBoard] = useMutationUpdateBoard();
  const [uploadFile] = useMuatationUploadFile();

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    getFieldState,
    trigger,
  } = useForm<IBoardFormProps>({
    resolver: yupResolver(BoardFormSchema),
    mode: "onSubmit",
  });
  const css = `.ql-editor {min-height: 250px;}`;

  const [urls, setUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = (event): void => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: Address): void => {
    setIsOpen((prev) => !prev);
    setValue("zipcode", data.zonecode);
    setValue("address", data.address);
  };

  const onChangeFileUrls = (url: string, file: File, index: number): void => {
    const tempUrls = [...urls];
    tempUrls[index] = url;
    setUrls(tempUrls);

    const tempFiles = [...files];
    tempFiles[index] = file;
    setFiles(tempFiles);
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) {
      urls.splice(0, images.length);
      setUrls([...images, ...urls]);
    }
  }, [props.data]);

  const onValid = async (data: IBoardFormProps): Promise<void> => {
    try {
      const results = await Promise.all(
        files.map(async (el) => await uploadFile({ variables: { file: el } })),
      );
      const resultUrls = results.map((el) => el.data?.uploadFile.url);
      if (!props.isEdit) {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: data.writer,
              password: data.password,
              title: data.title,
              contents: data.contents,
              boardAddress: {
                zipcode: data.zipcode,
                address: data.address,
                addressDetail: data.addressDetail,
              },
              youtubeUrl: data.youtubeUrl,
              images: resultUrls,
            },
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchBoards: (prev) => {
                  return [data.createBoard, ...prev];
                },
              },
            });
          },
        });
        void router.push(`/boards/${result.data?.createBoard?._id}`);
      } else {
        if (
          !getFieldState("title").isDirty ||
          !getFieldState("contents").isDirty ||
          !getFieldState("zipcode").isDirty ||
          !getFieldState("address").isDirty ||
          !getFieldState("addressDetail").isDirty ||
          !getFieldState("youtubeUrl").isDirty
        ) {
          Modal.error({ content: "수정된 내용이 없습니다." });
          return;
        }
        if (!data.password)
          Modal.error({ content: "비밀번호를 입력해주세요." });
        if (typeof router.query.boardId !== "string") {
          Modal.error({ content: "시스템에 문제가 있습니다." });
          return;
        }
        const currentFiles = JSON.stringify(files);
        const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
        const isChangedFiles = currentFiles !== defaultFiles;

        const result = await updateBoard({
          variables: {
            password: data.password,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            boardId: router.query.boardId!,
            updateBoardInput: {
              title: data.title,
              contents: data.contents,
              images: isChangedFiles ? resultUrls : [""],
              youtubeUrl: data.youtubeUrl,
              boardAddress: {
                zipcode: data.zipcode,
                address: data.address,
                addressDetail: data.addressDetail,
              },
            },
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchBoards: (prev) => {
                  return [data.updateBoard, ...prev];
                },
              },
            });
          },
        });
        void router.push(`/boards/${result.data?.updateBoard?._id}`);
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  return (
    <S.Container>
      <style>{css}</style>
      <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
      <S.Form onSubmit={handleSubmit(onValid)}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <S.BoxWrapper style={{ width: "49%" }}>
            <S.SmallTitle>작성자</S.SmallTitle>
            <S.Input
              type="text"
              {...register("writer")}
              readOnly={!!props.data?.fetchBoard.writer}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              placeholder="이름을 적어주세요."
            ></S.Input>
            <S.Error>{formState.errors?.writer?.message}</S.Error>
          </S.BoxWrapper>
          <S.BoxWrapper style={{ width: "49%" }}>
            <S.SmallTitle>비밀번호</S.SmallTitle>
            <S.Input
              type="password"
              {...register("password")}
              placeholder="비밀번호를 입력해주세요."
            ></S.Input>
            <S.Error>{formState.errors?.password?.message}</S.Error>
          </S.BoxWrapper>
        </div>
        <S.BoxWrapper>
          <S.SmallTitle>제목</S.SmallTitle>
          <S.Input
            type="text"
            {...register("title")}
            defaultValue={props.data?.fetchBoard.title}
            placeholder="제목을 작성해주세요."
          ></S.Input>
          <S.Error>{formState.errors?.title?.message}</S.Error>
        </S.BoxWrapper>
        <S.BoxWrapper>
          <S.SmallTitle>내용</S.SmallTitle>
          <ReactQuill
            onChange={onChangeContents}
            placeholder="내용을 작성해주세요."
            defaultValue={props.data?.fetchBoard?.contents}
            style={{ minHeight: "100px" }}
          />
          <S.Error>{formState.errors?.contents?.message}</S.Error>
        </S.BoxWrapper>
        <S.BoxWrapper>
          <S.SmallTitle>주소</S.SmallTitle>
          <S.Input
            type="text"
            placeholder="07250"
            {...register("zipcode")}
            readOnly
            defaultValue={props.data?.fetchBoard.boardAddress?.zipcode ?? ""}
            style={{ width: "70px", marginRight: "10px" }}
          />
          <S.ZipCodeButton onClick={onToggleModal}>
            우편번호 검색
          </S.ZipCodeButton>
          <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
            <DaumPostcodeEmbed onComplete={onCompleteAddressSearch} />
          </Modal>
          <br />
          <S.Input
            type="text"
            {...register("address")}
            readOnly
            defaultValue={props.data?.fetchBoard.boardAddress?.address ?? ""}
          />
          <br />
          <S.Input
            type="text"
            {...register("addressDetail")}
            placeholder="상세주소를 입력해주세요."
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          />
        </S.BoxWrapper>
        <S.BoxWrapper>
          <S.SmallTitle>유튜브</S.SmallTitle>
          <S.Input
            type="text"
            {...register("youtubeUrl")}
            placeholder="링크를 복사해주세요."
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          />
        </S.BoxWrapper>
        <S.BoxWrapper>
          <S.SmallTitle>사진 첨부</S.SmallTitle>
          <S.ImageUploadWrapper>
            {urls.map((el, index) => (
              <Upload
                key={index}
                index={index}
                el={el}
                isEdit={props.isEdit}
                onChangeFileUrls={onChangeFileUrls}
              />
            ))}
          </S.ImageUploadWrapper>
        </S.BoxWrapper>
        <S.BoxWrapper>
          <S.SmallTitle>메인 설정</S.SmallTitle>
          <div style={{ marginBottom: "30px" }}>
            <label style={{ fontSize: "0.9rem", marginRight: "10px" }}>
              <S.RadioInput type="radio" name="mainSetting" value="youtube" />
              유튜브
            </label>
            <label style={{ fontSize: "0.9rem", marginRight: "10px" }}>
              <S.RadioInput type="radio" name="mainSetting" value="photo" />
              사진
            </label>
          </div>
        </S.BoxWrapper>
        <div style={{ display: "flex" }}>
          <S.SubmitButton isCompleted={formState.isValid}>
            {props.isEdit ? "수정" : "등록"}하기
          </S.SubmitButton>
        </div>
      </S.Form>
    </S.Container>
  );
};
