import * as S from "./Login.styles";
import { useForm } from "react-hook-form";
import type * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../commons/validation/yup";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { LOGIN_USER } from "./Login.queries";
import { useRouter } from "next/router";
import type { ILoginFormProps } from "./Login.types";
import { Modal } from "antd";
import { accessTokenState, pathState } from "../../../commons/stores";
import { useUserInfo } from "../../../commons/hooks/cutoms/useUserInfo";
import { useAuth } from "../../../commons/hooks/cutoms/useAuth";

export const Login = (): JSX.Element => {
  type LoginData = yup.InferType<typeof loginSchema>;
  const { register, handleSubmit, formState } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [path] = useRecoilState(pathState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onValid = async (data: ILoginFormProps): Promise<void> => {
    try {
      const result = await loginUser({
        variables: { email: data.email, password: data.password },
      });

      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다. 다시 시도해 주세요.");
        return;
      }
      setAccessToken(accessToken);

      if (path === "") void router.push("/");
      void router.push(path);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.Wrapper>
      <S.Title>로그인</S.Title>
      <form onSubmit={handleSubmit(onValid)}>
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
      <Link href="/signup">
        <S.Signup>회원가입</S.Signup>
      </Link>
    </S.Wrapper>
  );
};
