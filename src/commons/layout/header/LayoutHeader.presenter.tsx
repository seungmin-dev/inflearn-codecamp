import * as S from "./LayoutHeader.styles";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <S.HeaderWrapper>
      <S.Header>
        <S.Logo onClick={props.onClickLogo} src="/images/logo.png" />
        <S.BtnWrapper>
          <S.LoginButton onClick={props.onClickLogin}>로그인</S.LoginButton>
          <S.SignupButton>회원가입</S.SignupButton>
        </S.BtnWrapper>
      </S.Header>
    </S.HeaderWrapper>
  );
}
