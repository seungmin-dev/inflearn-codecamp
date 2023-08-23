export interface ILoginUIProps {
  onValid: (data: ILoginFormProps) => Promise<void>;
}
export interface ILoginFormProps {
  email: string;
  password: string;
}
