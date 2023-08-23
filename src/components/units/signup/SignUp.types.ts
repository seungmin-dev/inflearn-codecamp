export interface ISignUpFormProps {
  email: string;
  password: string;
  name: string;
}
export interface ISignUpUIProps {
  onValid: (data: ISignUpFormProps) => Promise<void>;
}
