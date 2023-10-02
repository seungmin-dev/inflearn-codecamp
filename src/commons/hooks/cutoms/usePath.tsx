import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pathState } from "../../stores";

export const usePath = (): void => {
  const router = useRouter();
  const [path, setPath] = useRecoilState(pathState);

  useEffect(() => {
    if (!router.asPath.startsWith("/login"))
      setPath(router.asPath === "" ? "/" : router.asPath);
  }, []);
};
