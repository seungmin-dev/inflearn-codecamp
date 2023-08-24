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
  price: yup.number().required("상품 가격을 입력해주세요."),
  tags: yup.string(),
});
