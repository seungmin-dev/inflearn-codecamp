import { useForm } from "react-hook-form";
import { TextareaUI } from "../../textarea";
import * as S from "../styles";
import { useReply } from "../../../../commons/hooks/cutoms/useReply";
import { useTextarea } from "../../../../commons/hooks/cutoms/useTextarea";
import { Dispatch, SetStateAction } from "react";

interface MarketWriteReplyProps {
  setReplyId: Dispatch<SetStateAction<string>>;
  useditemQuestionId: string;
}
export const MarketWriteReply = ({
  setReplyId,
  useditemQuestionId,
}: MarketWriteReplyProps) => {
  const { handleSubmit, setValue } = useForm();
  const { onValid } = useReply({ useditemQuestionId, setReplyId });
  const { leng, onChangeTextarea } = useTextarea({ setValue });

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onValid)}>
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
