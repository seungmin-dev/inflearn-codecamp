import { GraphQLClient } from "graphql-request";
import BoardList from "../../src/components/units/board/list/BoardList.index";
import { FETCH_BOARDS_OF_THE_BEST } from "../../src/components/commons/hooks/queries/useQueryFetchBoardsOfTheBest";
import type { IBoard, IQuery } from "../../src/commons/types/generated/types";

export default function BoardListPage(props: { data: IBoard[] }): JSX.Element {
  return <BoardList data={props.data} />;
}

export const getServerSideProps = async (): Promise<{
  props: { data: IBoard[] };
}> => {
  const graphQLClient = new GraphQLClient(
    "https://backend-practice.codebootcamp.co.kr/graphql",
  );
  const result = await graphQLClient.request<
    Pick<IQuery, "fetchBoardsOfTheBest">
  >(FETCH_BOARDS_OF_THE_BEST);
  return {
    props: {
      data: result.fetchBoardsOfTheBest,
    },
  };
};
