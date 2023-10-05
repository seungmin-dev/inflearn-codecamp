import Link from "next/link";
import * as S from "./SignUp.styles";
import { useForm } from "react-hook-form";
import type { ISignUpUIProps } from "./SignUp.types";
import type * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../../commons/validation/yup";

export default function SignUpUI(props: ISignUpUIProps): JSX.Element {
  type SignUpData = yup.InferType<typeof signUpSchema>;
  const { register, handleSubmit, formState } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
    mode: "onSubmit",
  });
  return (
    <S.Wrapper>
      <S.Title>회원가입</S.Title>
      <form onSubmit={handleSubmit(props.onValid)}>
        <S.Input type="text" {...register("email")} placeholder="이메일" />
        <S.ErrorText>{formState.errors.email?.message}</S.ErrorText>
        <S.Input
          type="password"
          {...register("password")}
          placeholder="비밀번호"
        />
        <S.ErrorText>{formState.errors.password?.message}</S.ErrorText>
        <S.Input type="text" {...register("name")} placeholder="이름" />
        <S.ErrorText>{formState.errors.name?.message}</S.ErrorText>
        <S.Button>회원가입</S.Button>
      </form>
      <Link href="/login">
        <S.Login>로그인</S.Login>
      </Link>
    </S.Wrapper>
  );
}
