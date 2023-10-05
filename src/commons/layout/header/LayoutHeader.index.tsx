import Link from "next/link";
import * as S from "./LayoutHeader.styles";
import { Dropdown, Modal } from "antd";
import type { MenuProps } from "antd";
import { useMutationLogoutUser } from "../../hooks/mutations/useMutationLogoutUser";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useApolloClient } from "@apollo/client";
import { accessTokenState, userInfoState } from "../../stores";
import { LayoutNavigation } from "../navigation/LayoutNavigation.index";
import { usePath } from "../../hooks/cutoms/usePath";
import { Dispatch, SetStateAction } from "react";
import { useUserInfo } from "../../hooks/cutoms/useUserInfo";

interface ILayoutHeaderProps {
  setNav: Dispatch<SetStateAction<boolean>>;
  nav: boolean;
}
export default function LayoutHeader({
  setNav,
  nav,
}: ILayoutHeaderProps): JSX.Element {
  usePath();
  useUserInfo();

  const [userInfo] = useRecoilState(userInfoState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const resetUserInfo = useResetRecoilState(userInfoState);
  const resetAccessToken = useResetRecoilState(accessTokenState);
  const client = useApolloClient();
  const [logout] = useMutationLogoutUser();
  const onClickLogout = async (): Promise<void> => {
    try {
      await logout();
      void client.clearStore();
      resetUserInfo();
      resetAccessToken();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a onClick={onClickLogout}>로그아웃</a>,
    },
  ];
  const onClickMobNav = (): void => {
    setNav((prev) => !prev);
  };

  return (
    <S.HeaderWrapper>
      <S.Header>
        <Link href="/">
          <a>
            <S.Logo src="/images/logo.png" />
          </a>
        </Link>
        <LayoutNavigation />
        <S.SessionWrapper>
          {!userInfo?.name ? (
            <Link href="/login">
              <a>
                <S.LoginButton>로그인</S.LoginButton>
              </a>
            </Link>
          ) : (
            <Dropdown menu={{ items }} placement="bottomLeft">
              <S.UserInfoWrapper>
                <S.UserPic
                  src={`https://storage.googleapis.com/${userInfo?.picture}`}
                  onError={(event) =>
                    (event.currentTarget.src = "/images/icons/profile.png")
                  }
                />
                <S.UserName style={{ color: "#ffd600", fontWeight: "bold" }}>
                  {userInfo?.name}
                </S.UserName>
              </S.UserInfoWrapper>
            </Dropdown>
          )}
        </S.SessionWrapper>
        <S.MobileNav onClick={onClickMobNav}>
          {!nav ? (
            <svg
              fill="none"
              stroke="black"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </S.MobileNav>
      </S.Header>
    </S.HeaderWrapper>
  );
}
