import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, pathState, userInfoState } from "../../stores";

export const useAuth = (): void => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [path] = useRecoilState(pathState);

  useEffect(() => {
    if (accessToken === "") {
      if (!router.asPath.startsWith("/login")) {
        alert("로그인 후 이용 가능합니다.");
        void router.push("/login");
      }
    } else {
      if (router.asPath.startsWith("/login")) void router.push(path);
    }
  }, [accessToken]);
};
