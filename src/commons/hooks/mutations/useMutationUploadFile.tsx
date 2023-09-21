import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const useMuatationUploadFile = () => {
  const mutation = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  return mutation;
};
