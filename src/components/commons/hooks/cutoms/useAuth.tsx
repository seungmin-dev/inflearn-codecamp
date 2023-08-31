import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pathState } from "../../stores";

export const useAuth = (): void => {
  const router = useRouter();
  const [, setPath] = useRecoilState(pathState);
  useEffect(() => {
    if (router.asPath !== "/login") setPath(router.asPath);

    if (
      localStorage.getItem("accessToken") !== null &&
      router.asPath === "/login"
    )
      void router.push("/");
    if (localStorage.getItem("accessToken") === null) {
      if (router.asPath !== "/login") {
        alert("로그인 후 이용 가능합니다.");
        void router.push("/login");
      }
    }
  }, []);
};
