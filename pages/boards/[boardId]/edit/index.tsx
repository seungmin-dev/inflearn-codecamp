import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteContainer from "../../../../src/components/units/board/write/BoardWrite.container";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";

export default function BoardEditPage(): JSX.Element {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  return <BoardWriteContainer isEdit={true} data={data} />;
}
