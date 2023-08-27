import { UploadImage, UploadButton } from "./Upload.styles";
import type { IUploadUIProps } from "./Upload.types";

export default function UploadUI(props: IUploadUIProps): JSX.Element {
  return (
    <>
      {props.fileUrl !== "" ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>
            <span>+</span>
            <span>Upload</span>
          </>
        </UploadButton>
      )}
      <input
        type="file"
        style={{ display: "none" }}
        onChange={props.onChangeFile}
        ref={props.fileRef}
      />
    </>
  );
}
