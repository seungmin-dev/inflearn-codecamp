import { GraphQLClient } from "graphql-request";
import Markets from "../../src/components/units/markets/list/MarketsList.index";
import type {
  IQuery,
  IUseditem,
} from "../../src/commons/types/generated/types";
import { FETCH_USEDITEMS_OF_THE_BEST } from "../../src/components/commons/hooks/queries/useQUeryFetchUseditemsBest";

export default function MarketsPage(props: { data: IUseditem[] }): JSX.Element {
  return <Markets data={props.data} />;
}

export const getServerSideProps = async (): Promise<{
  props: { data: IUseditem[] };
}> => {
  const graphQLClient = new GraphQLClient(
    "https://backend-practice.codebootcamp.co.kr/graphql",
  );
  const result = await graphQLClient.request<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USEDITEMS_OF_THE_BEST);

  return {
    props: {
      data: JSON.parse(JSON.stringify(result.fetchUseditemsOfTheBest)),
    },
  };
};
