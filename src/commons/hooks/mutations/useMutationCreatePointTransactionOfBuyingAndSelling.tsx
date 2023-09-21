import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
} from "../../types/generated/types";

const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      remarks
      contents
      price
      tags
      createdAt
      updatedAt
    }
  }
`;

export const useMutationCreatePointTransactionOfBuyingAndSelling = () => {
  const mutation = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  return mutation;
};
