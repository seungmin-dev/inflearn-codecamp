import { useRouter } from "next/router";
import BoardWriteContainer from "../../../../src/components/units/board/write/BoardWrite.container";
import { useQueryFetchBoard } from "../../../../src/components/commons/hooks/queries/useQueryFetchBoard";

export default function BoardEditPage(): JSX.Element {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") return <></>;

  const { data } = useQueryFetchBoard({ boardId: router.query.boardId });
  return <BoardWriteContainer isEdit={true} data={data} />;
}
