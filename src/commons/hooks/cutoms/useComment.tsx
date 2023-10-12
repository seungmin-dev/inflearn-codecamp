import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../stores";
import { useMutationCreateBoardComment } from "../mutations/useMutationCreateBoardComment";
import { useState } from "react";
import { useMutationCreateUseditemQuestion } from "../mutations/useMutationCreateUseditemQuestion";

interface ICommentFormProps {
  writer?: string;
  contents: string;
  rating?: number;
  password?: string;
  useditemQuestionId?: string;
}
interface IUseCommentArgs {
  kind: string;
}
export const useComment = ({ kind }: IUseCommentArgs) => {
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoState);
  const [complete, setComplete] = useState(false);
  const [createBoardComment] = useMutationCreateBoardComment();
  const [useCreate] = useMutationCreateUseditemQuestion();

  const onValid = async (data: ICommentFormProps): Promise<void> => {
    if (
      typeof router.query.boardId !== "string" &&
      typeof router.query.useditemId !== "string"
    ) {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      setComplete(true);
      if (kind === "board") {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: data.writer ?? userInfo.name,
              password: data.password,
              contents: data.contents,
              rating: 0,
            },
            boardId: router.query.boardId as string,
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
      } else {
        await useCreate({
          variables: {
            createUseditemQuestionInput: {
              contents: data.contents,
            },
            useditemId: router.query.useditemId as string,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestions: (prev) => {
                  return [data.createUseditemQuestion, ...prev];
                },
              },
            });
          },
        });
      }
      setComplete(false);
      Modal.success({ content: "댓글이 정상적으로 등록되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return { onValid, complete };
};
