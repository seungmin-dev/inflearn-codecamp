import { useForm } from "react-hook-form";
import * as S from "../styles";
import { useEffect } from "react";
import { useBoardComment } from "../../../../commons/hooks/cutoms/useBoardComment";
import { TextareaUI } from "../../textarea";
import { useTextarea } from "../../../../commons/hooks/cutoms/useTextarea";

export const Comments = () => {
  const { handleSubmit, register, reset, setValue } = useForm();
  const { onValid, complete } = useBoardComment();
  const { leng, onChangeTextarea } = useTextarea({ setValue });

  useEffect(() => {
    reset();
  }, [complete]);

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onValid)}>
        <S.Input type="text" placeholder="작성자" {...register("writer")} />
        <S.Input
          type="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        <TextareaUI
          defaultText=""
          isEdit={false}
          leng={leng}
          onChangeTextarea={onChangeTextarea}
        />
      </S.Form>
    </S.Wrapper>
  );
};
