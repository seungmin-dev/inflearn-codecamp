import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useQuery } from "@apollo/client";
import type { IQuery } from "../../types/generated/types";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";
import { useRecoilState } from "recoil";
import { userEmailState } from "../../../components/commons/stores";

export default function LayoutHeader(): JSX.Element {
  const [, setUserEmail] = useRecoilState(userEmailState);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  setUserEmail(data?.fetchUserLoggedIn.email);

  return <LayoutHeaderUI userName={data?.fetchUserLoggedIn.name} />;
}
