import { useRecoilState } from "recoil";
import LoginUI from "./Login.presenter";
import { accessTokenState } from "../../commons/stores";
import { useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { LOGIN_USER } from "./Login.queries";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import { useState } from "react";

export default function Login(): JSX.Element {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs({
      ...inputs,
      [event.currentTarget.id]: event.currentTarget.value,
    });
    if (inputs.email !== "") setErrors({ ...errors, emailError: "" });
    if (inputs.password !== "") setErrors({ ...errors, passwordError: "" });
  };

  const onClickSubmit = async (): Promise<void> => {
    if (inputs.email === "") {
      setErrors({ ...errors, emailError: "이메일을 입력해주세요." });
      return;
    }
    if (inputs.password === "") {
      setErrors({ ...errors, passwordError: "비밀번호를 입력해주세요." });
      return;
    }

    try {
      const result = await loginUser({
        variables: { email: inputs.email, password: inputs.password },
      });
      const accessToken = result.data.loginUser.accessToken;
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다. 다시 시도해 주세요.");
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <LoginUI
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      errors={errors}
    />
  );
}
