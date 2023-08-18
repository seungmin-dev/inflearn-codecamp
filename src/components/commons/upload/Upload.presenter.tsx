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
            <span
              style={{
                color: "#4F4F4F",
                padding: 0,
                margin: 0,
              }}
            >
              +
            </span>
            <span
              style={{
                color: "#4F4F4F",
                fontSize: "0.5rem",
              }}
            >
              Upload
            </span>
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
