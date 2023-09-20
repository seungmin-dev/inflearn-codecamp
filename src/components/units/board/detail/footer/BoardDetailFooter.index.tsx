import { useRouter } from "next/router";
import * as S from "../BoardDetail.styles";
import { Modal } from "antd";
import { useMutationDeleteBoard } from "../../../../commons/hooks/mutations/useMutationDeleteBoard";

export const BoardDetailFooter = (): JSX.Element => {
  const router = useRouter();
  const [deleteBoard] = useMutationDeleteBoard();

  const onClickMoveToList = (): void => {
    void router.push(`/boards`);
  };

  const onClickEdit = (): void => {
    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDelete = async (): Promise<void> => {
    if (typeof router.query.boardId !== "string") {
      Modal.error({ content: "시스템에 문제가 있습니다." });
      return;
    }
    try {
      const result = await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.FooterWrapper>
      <S.BtnWrapper>
        <S.Btn onClick={onClickMoveToList}>목록으로</S.Btn>
        <S.Btn onClick={onClickEdit}>수정하기</S.Btn>
        <S.Btn onClick={onClickDelete}>삭제하기</S.Btn>
      </S.BtnWrapper>
    </S.FooterWrapper>
  );
};
