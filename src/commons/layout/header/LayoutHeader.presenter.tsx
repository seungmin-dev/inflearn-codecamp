import Link from "next/link";
import * as S from "./LayoutHeader.styles";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <S.HeaderWrapper>
      <S.Header>
        <Link href="/">
          <a>
            <S.Logo src="/images/logo.png" />
          </a>
        </Link>
        {!props.userName ? (
          <S.BtnWrapper>
            <Link href="/login">
              <a>
                <S.LoginButton>로그인</S.LoginButton>
              </a>
            </Link>
            <Link href="/signup">
              <a>
                <S.SignupButton>회원가입</S.SignupButton>
              </a>
            </Link>
          </S.BtnWrapper>
        ) : (
          <span>
            <span style={{ color: "#ffd600", fontWeight: "bold" }}>
              {props.userName}
            </span>
            님, 안녕하세요
          </span>
        )}
      </S.Header>
    </S.HeaderWrapper>
  );
}
