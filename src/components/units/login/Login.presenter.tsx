import * as S from "./Login.styles";
import type { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>로그인</S.Title>
      <form>
        <S.Input
          id="email"
          type="text"
          placeholder="이메일"
          onChange={props.onChangeInputs}
        />
        <S.ErrorText>{props.errors?.emailError}</S.ErrorText>
        <S.Input
          id="password"
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangeInputs}
        />
        <S.ErrorText>{props.errors?.passwordError}</S.ErrorText>
        <S.Button onClick={props.onClickSubmit}>LOGIN</S.Button>
      </form>
    </S.Wrapper>
  );
}
