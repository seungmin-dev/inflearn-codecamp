import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useQuery } from "@apollo/client";
import type { IQuery } from "../../types/generated/types";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";
import { useRecoilState } from "recoil";
import { userIdState } from "../../../components/commons/stores";
import { useEffect } from "react";

export default function LayoutHeader(): JSX.Element {
  const [, setUserId] = useRecoilState(userIdState);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  useEffect(() => {
    setUserId(data?.fetchUserLoggedIn._id);
  }, [data]);

  return <LayoutHeaderUI userName={data?.fetchUserLoggedIn.name} />;
}
