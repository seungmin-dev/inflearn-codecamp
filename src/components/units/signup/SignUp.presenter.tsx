import Link from "next/link";
import * as S from "./SignUp.styles";
import { useForm } from "react-hook-form";
import type { ISignUpFormProps, ISignUpUIProps } from "./SignUp.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../commons/validation/yup";

export default function SignUpUI(props: ISignUpUIProps): JSX.Element {
  const { register, handleSubmit, formState } = useForm<ISignUpFormProps>({
    resolver: yupResolver(signUpSchema),
    mode: "onSubmit",
  });
  return (
    <S.Wrapper>
      <S.Title>회원가입</S.Title>
      <form onSubmit={handleSubmit(props.onValid)}>
        <S.InputTitle>이메일</S.InputTitle>
        <S.Input type="text" {...register("email")} />
        <S.ErrorText>{formState.errors.email?.message}</S.ErrorText>
        <S.InputTitle>비밀번호</S.InputTitle>
        <S.Input type="password" {...register("password")} />
        <S.ErrorText>{formState.errors.password?.message}</S.ErrorText>
        <S.InputTitle>이름</S.InputTitle>
        <S.Input type="text" {...register("name")} />
        <S.ErrorText>{formState.errors.name?.message}</S.ErrorText>
        <S.Button>회원가입</S.Button>
      </form>
      <Link href="/login">
        <S.Anchor>이미 계정이 있나요?</S.Anchor>
      </Link>
    </S.Wrapper>
  );
}
