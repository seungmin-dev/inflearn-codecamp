import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetailContainer(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickMoveToList = (): void => {
    void router.push(`/boards`);
  };

  const onClickEdit = (): void => {
    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDelete = async (): Promise<void> => {
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      const result = await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
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
