import { useMutation } from "@apollo/client";
import SignUpUI from "./SignUp.presenter";
import type { ISignUpFormProps } from "./SignUp.types";
import { CREATE_USER } from "./SignUp.queries";
import { useRouter } from "next/router";

export default function SignUp(): JSX.Element {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const onValid = async (data: ISignUpFormProps): Promise<void> => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      alert("회원가입에 성공했습니다. 로그인 후 이용해주세요!");
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return <SignUpUI onValid={onValid} />;
}
