import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteContainer from "../../../../src/components/units/board/write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardEditPage(): JSX.Element {
  const router = useRouter();
  console.log(router);
  if (!router || typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  return <BoardWriteContainer isEdit={true} data={data} />;
}
