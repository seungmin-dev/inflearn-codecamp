import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../types/generated/types";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      useditem {
        _id
      }
      createdAt
      updatedAt
    }
  }
`;

export const useMutationCreatePointTransactionOfLoading = () => {
  const query = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  return query;
};
