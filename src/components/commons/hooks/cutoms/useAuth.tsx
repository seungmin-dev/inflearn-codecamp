import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, pathState } from "../../stores";

export const useAuth = (): void => {
  const router = useRouter();
  const [path, setPath] = useRecoilState(pathState);
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (router.asPath !== "/login") setPath(router.asPath);

    if (accessToken === "" || accessToken === undefined) {
      if (router.asPath !== "/login") {
        alert("로그인 후 이용 가능합니다.");
        void router.push(path);
      }
    } else {
      if (router.asPath === "/login") void router.push("/");
    }
  }, [accessToken]);
};
