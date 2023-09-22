import { useForm } from "react-hook-form";
import * as S from "./MyProfile.styles";
import type * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useMutationResetUserPassword } from "../../../../commons/hooks/mutations/useMutationResetUserPassword";
import { ChangePasswordFormSchema } from "../../../../commons/validation/yup";

interface IChangePasswordFormProps {
  curPassword: any;
  newPassword: any;
  newPasswordConfirm: any;
}

export const MyProfile = (): JSX.Element => {
  const [resetPassword] = useMutationResetUserPassword();
  type ChangePasswordData = yup.InferType<typeof ChangePasswordFormSchema>;
  const { handleSubmit, register, formState, reset } =
    useForm<ChangePasswordData>({
      resolver: yupResolver(ChangePasswordFormSchema),
      mode: "onChange",
    });
  const onValid = async (data: IChangePasswordFormProps): Promise<void> => {
    try {
      await resetPassword({
        variables: {
          password: data.newPasswordConfirm,
        },
      });
      Modal.success({ content: "비밀번호가 정상적으로 수정되었습니다." });
      reset();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <S.Wrapper>
      <S.Title>비밀번호 변경</S.Title>
      <form onSubmit={handleSubmit(onValid)}>
        <S.InputBox>
          <S.Span>현재 비밀번호</S.Span>
          <S.Input
            type="password"
            {...register("curPassword")}
            placeholder="현재 비밀번호를 입력해 주세요."
          />
          <S.ErrorMessage>
            {formState.errors?.curPassword?.message}
          </S.ErrorMessage>
        </S.InputBox>
        <S.InputBox>
          <S.Span>새 비밀번호</S.Span>
          <S.Input
            type="password"
            {...register("newPassword")}
            placeholder="새 비밀번호를 입력해 주세요."
          />
          <S.ErrorMessage>
            {formState.errors?.newPassword?.message}
          </S.ErrorMessage>
        </S.InputBox>
        <S.InputBox>
          <S.Span>새 비밀번호 확인</S.Span>
          <S.Input
            type="password"
            {...register("newPasswordConfirm")}
            placeholder="새 비밀번호를 확인해 주세요."
          />
          <S.ErrorMessage>
            {formState.errors?.newPasswordConfirm?.message}
          </S.ErrorMessage>
        </S.InputBox>
        <S.Button isCompleted={formState.isValid}>비밀번호 변경</S.Button>
      </form>
    </S.Wrapper>
  );
};
