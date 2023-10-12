import { useForm } from "react-hook-form";
import * as S from "../styles";
import { useEffect } from "react";
import { useComment } from "../../../../commons/hooks/cutoms/useComment";
import { TextareaUI } from "../../textarea";
import { useTextarea } from "../../../../commons/hooks/cutoms/useTextarea";

interface ICommentsProps {
  kind: string;
}
export const Comments = ({ kind }: ICommentsProps) => {
  const { handleSubmit, register, reset, setValue } = useForm();
  const { onValid, complete } = useComment({ kind });
  const { leng, onChangeTextarea } = useTextarea({ setValue });

  useEffect(() => {
    reset();
    setValue("contents", "");
  }, [complete]);

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onValid)}>
        {kind === "board" ? (
          <>
            <S.Input type="text" placeholder="작성자" {...register("writer")} />
            <S.Input
              type="password"
              placeholder="비밀번호"
              {...register("password")}
            />
          </>
        ) : null}
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
