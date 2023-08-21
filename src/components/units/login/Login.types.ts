import type { ChangeEvent } from "react";

export interface ILoginUIProps {
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  errors: {
    emailError: string;
    passwordError: string;
  };
}
