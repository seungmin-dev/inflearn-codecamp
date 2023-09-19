import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import { UploadButton, UploadImage } from "./Upload.styles";

export interface IUploadProps {
  index: number;
  el: string;
  isEdit: boolean;
  defaultFileUrl?: string;
  onChangeFileUrls: (url: string, file: File, index: number) => void;
}

export const Upload = (props: IUploadProps): JSX.Element => {
  const [tempUrl, setTempUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = (event): void => {
    event.preventDefault();
    fileRef.current?.click();
  };
  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setTempUrl(event.target?.result);
        props.onChangeFileUrls(event.target?.result, file, props.index);
      }
    };
  };

  return (
    <>
      {tempUrl ? (
        <UploadImage onClick={onClickUpload} src={tempUrl} />
      ) : props.isEdit && props.el ? (
        <UploadImage
          onClick={onClickUpload}
          src={`https://storage.googleapis.com/${props.el}`}
        />
      ) : (
        <UploadButton onClick={onClickUpload}>
          <>
            <span>+</span>
            <span>Upload</span>
          </>
        </UploadButton>
      )}
      <input
        type="file"
        style={{ display: "none" }}
        onChange={onChangeFile}
        ref={fileRef}
      />
    </>
  );
};
