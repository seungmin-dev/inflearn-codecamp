import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useQuery } from "@apollo/client";
import type { IQuery } from "../../types/generated/types";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";
import { useRecoilState } from "recoil";
import { userEmailState } from "../../../components/commons/stores";
import { useEffect } from "react";

export default function LayoutHeader(): JSX.Element {
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  useEffect(() => {
    setUserEmail(data?.fetchUserLoggedIn.email);
  }, [userEmail]);

  return <LayoutHeaderUI userName={data?.fetchUserLoggedIn.name} />;
}
