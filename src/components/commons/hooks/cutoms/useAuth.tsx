import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pathState } from "../../stores";

export const useAuth = (): void => {
  const router = useRouter();
  const [, setPath] = useRecoilState(pathState);

  useEffect(() => {
    setPath(router.asPath);
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다.");
      void router.push("/login");
    }
  }, []);
};
