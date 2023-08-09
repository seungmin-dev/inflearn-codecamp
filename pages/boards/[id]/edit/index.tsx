import { gql, useQuery } from "@apollo/client";
import BoardWriteContainer from "../../../../src/components/units/board/write/BoardWrite.container";
import { useRouter } from "next/router";

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

export default function BoardEditPage() {
  const router = useRouter();
  console.log(router);
  if (!router || typeof router.query.id !== "string") return <></>;

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });
  return <BoardWriteContainer isEdit={true} data={data} />;
}
