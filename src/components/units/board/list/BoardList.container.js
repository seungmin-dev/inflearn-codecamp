import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";

export default function BoardListContainer() {
  const { data } = useQuery(FETCH_BOARDS);
  return <BoardListUI data={data} />;
}
