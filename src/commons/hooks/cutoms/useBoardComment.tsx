import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../stores";
import { useMutationCreateBoardComment } from "../mutations/useMutationCreateBoardComment";
import { useState } from "react";

interface ICommentFormProps {
  writer?: string;
  contents: string;
  rating?: number;
  password?: string;
  useditemQuestionId?: string;
}
export const useBoardComment = () => {
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoState);
  const [complete, setComplete] = useState(false);
  const [createBoardComment] = useMutationCreateBoardComment();

  const onValid = async (
    data: ICommentFormProps,
    e: React.MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      setComplete(true);
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: data.writer ?? userInfo.name,
            password: data.password,
            contents: data.contents,
            rating: 0,
          },
          boardId: router.query.boardId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoardComments: (prev) => {
                return [data.createBoardComment, ...prev];
              },
            },
          });
        },
      });
      setComplete(false);
      Modal.success({ content: "댓글이 정상적으로 등록되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return { onValid, complete };
};
