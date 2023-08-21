import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useQuery } from "@apollo/client";
import type { IQuery } from "../../types/generated/types";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickLogo = (): void => {
    void router.push("/boards");
  };
  const onClickLogin = (): void => {
    void router.push("/login");
  };
  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
      userName={data?.fetchUserLoggedIn.name}
    />
  );
}
