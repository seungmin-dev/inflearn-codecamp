import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, pathState, userInfoState } from "../../stores";
import { getAccessToken } from "../../libraries/getAccessToken";
import { useUserInfo } from "./useUserInfo";

export const useAuth = (): void => {
  const router = useRouter();
  const [path, setPath] = useRecoilState(pathState);
  const [accessToken] = useRecoilState(accessTokenState);

  useUserInfo();

  useEffect(() => {
    if (router.asPath !== "/login") setPath(router.asPath);

    if (accessToken === "") {
      if (router.asPath !== "/login") {
        alert("로그인 후 이용 가능합니다.");
        void router.push(path);
      }
    } else {
      if (router.asPath === "/login") void router.push("/");
    }
  }, [accessToken]);
};
