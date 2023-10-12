import { useState } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

interface ITextareaArgs {
  setValue?: UseFormSetValue<FieldValues>;
}

export const useTextarea = ({ setValue }: ITextareaArgs) => {
  const [leng, setLeng] = useState(0);

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue("contents", e.currentTarget.value);
    setLeng(Number(e.currentTarget.value.length));
  };
  return { leng, onChangeTextarea };
};
