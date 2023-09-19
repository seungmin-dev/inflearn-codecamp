import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});

export const signUpSchema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자리 이상 입력해주세요.")
    .max(16, "비밀번호는 16자리 이하로 입력해주세요.")
    .required("비밀번호를 입력해주세요."),
  name: yup.string().required("이름을 입력해주세요."),
});

export const ItemFormSchema = yup.object({
  name: yup.string().required("상품이름을 입력해주세요."),
  remarks: yup.string().required("상품 정보를 요약해주세요."),
  contents: yup.string().required("상품 정보를 입력해주세요."),
  price: yup
    .number()
    .typeError("숫자만 입력가능합니다.")
    .required("상품 가격을 입력해주세요."),
  tags: yup.string(),
  lat: yup.number().typeError("숫자만 입력가능합니다."),
  lng: yup.number().typeError("숫자만 입력가능합니다."),
  address: yup.string(),
  addressDetail: yup.string(),
});

export const ChangePasswordFormSchema = yup.object({
  // curPassword: yup.mixed()
  curPassword: yup.string().required("현재 비밀번호를 입력해 주세요."),
  newPassword: yup
    .string()
    .min(6, "비밀번호는 6자리 이상 입력해야 합니다.")
    .max(8, "비밀번호는 8자리 이하로 입력해야 합니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
      "영문, 숫자 포함 8자리를 입력해주세요.",
    )
    .required("새 비밀번호를 입력해 주세요."),
  newPasswordConfirm: yup
    .string()
    .required("새 비밀번호를 확인해 주세요.")
    .oneOf([yup.ref("newPassword")], "비밀번호가 다릅니다."),
});

export const BoardFormSchema = yup.object({
  writer: yup.string().required("작성자를 입력해 주세요."),
  password: yup.string().required("비밀번호를 입력해 주세요."),
  title: yup.string().required("제목을 입력해 주세요."),
  contents: yup.string().required("내용을 입력해 주세요."),
});
