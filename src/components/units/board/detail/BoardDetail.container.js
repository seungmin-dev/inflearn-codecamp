import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  const onClickDelete = () => {
    try {
      useMutation(DELETE_BOARD, {
        variables: {
          boardId: router.query.id,
        },
      });
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  };

  return <BoardDetailUI data={data} onClickDelete={onClickDelete} />;
}
