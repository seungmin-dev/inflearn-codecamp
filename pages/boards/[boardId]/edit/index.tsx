import { useRouter } from "next/router";
import { useQueryFetchBoard } from "../../../../src/components/commons/hooks/queries/useQueryFetchBoard";
import { BoardWrite } from "../../../../src/components/units/board/write/BoardWrite.index";

export default function BoardEditPage(): JSX.Element {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") return <></>;

  const { data } = useQueryFetchBoard({ boardId: router.query.boardId });
  return <BoardWrite isEdit={true} data={data} />;
}
