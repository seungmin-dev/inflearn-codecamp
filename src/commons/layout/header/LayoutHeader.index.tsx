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

export default function LayoutHeader(): JSX.Element {
  usePath();

  const [userInfo] = useRecoilState(userInfoState);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const resetUserInfo = useResetRecoilState(userInfoState);
  const client = useApolloClient();
  const [logout] = useMutationLogoutUser();
  const onClickLogout = async (): Promise<void> => {
    try {
      await logout();
      setAccessToken("");
      void client.clearStore();
      resetUserInfo();
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
            <S.UserInfoWrapper>
              <S.UserPic
                src={`https://storage.googleapis.com/${userInfo?.picture}`}
                onError={(event) =>
                  (event.currentTarget.src = "/images/icons/profile.png")
                }
              />
              <Dropdown menu={{ items }} placement="bottomLeft">
                <S.UserName style={{ color: "#ffd600", fontWeight: "bold" }}>
                  {userInfo?.name}
                </S.UserName>
              </Dropdown>
            </S.UserInfoWrapper>
          )}
        </S.SessionWrapper>
      </S.Header>
    </S.HeaderWrapper>
  );
}
