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
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickMoveToList = () => {
    router.push(`/boards`);
  };

  const onClickEdit = () => {
    router.push(`/boards/${router.query.id}/edit`);
  };

  const onClickDelete = async () => {
    try {
      console.log(router.query.id);
      const result = await deleteBoard({
        variables: {
          boardId: router.query.id,
        },
      });
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
    />
  );
}
