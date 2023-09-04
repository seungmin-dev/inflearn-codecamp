import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../stores";

export const WithAuth =
  (Component: any) =>
  (props: any): JSX.Element => {
    const router = useRouter();
    const [accessToken] = useRecoilState(accessTokenState);

    useEffect(() => {
      // if (localStorage.getItem("accessToken") === null) {
      if (accessToken === null) {
        alert("로그인 후 이용 가능합니다.");
        void router.push("/login");
      }
    }, []);

    return <Component {...props} />;
  };
