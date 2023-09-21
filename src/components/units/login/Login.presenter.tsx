import * as S from "./Login.styles";
import { useForm } from "react-hook-form";
import type { ILoginFormProps, ILoginUIProps } from "./Login.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../commons/validation/yup";

export default function LoginUI(props: ILoginUIProps): JSX.Element {
  const { register, handleSubmit, formState } = useForm<ILoginFormProps>({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });
  return (
    <S.Wrapper>
      <S.Title>로그인</S.Title>
      <form onSubmit={handleSubmit(props.onValid)}>
        <S.Input {...register("email")} type="text" placeholder="이메일" />
        <S.ErrorText>{formState.errors.email?.message}</S.ErrorText>
        <S.Input
          {...register("password")}
          type="password"
          placeholder="비밀번호"
        />
        <S.ErrorText>{formState.errors.password?.message}</S.ErrorText>
        <S.Button>LOGIN</S.Button>
      </form>
    </S.Wrapper>
  );
}
