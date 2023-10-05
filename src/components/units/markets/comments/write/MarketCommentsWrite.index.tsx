import { useRecoilState } from "recoil";
import { CommentsWrite } from "../../../../commons/comments/write/CommentsWrite.index";
import { userInfoState } from "../../../../../commons/stores";
import { Modal } from "antd";
import { useMutationCreateUseditemQuestion } from "../../../../../commons/hooks/mutations/useMutationCreateUseditemQuestion";
import { useRouter } from "next/router";
import type {
  ICommentFormProps,
  IcommentMarketProps,
} from "../../../../commons/comments/Comments.types";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useMutationUpdateUseditemQuestion } from "../../../../../commons/hooks/mutations/useMutationUpdateUseditemQuestion";

interface IMarketCommentsWriteProps {
  data?: IcommentMarketProps;
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}
export const MarketCommentsWrite = (
  props: IMarketCommentsWriteProps,
): JSX.Element => {
  const router = useRouter();
  const [isComplete, setIsComplete] = useState(false);
  const [prevRating, setPrevRating] = useState(0);

  const [userInfo] = useRecoilState(userInfoState);
  const [createMarketComment] = useMutationCreateUseditemQuestion();
  const [updateMarketComment] = useMutationUpdateUseditemQuestion();

  const onValid = async (data: ICommentFormProps): Promise<void> => {
    if (!userInfo.id) {
      Modal.error({ content: "댓글 작성은 로그인 후 가능합니다." });
      void router.push("/login");
    }
    if (typeof router.query.useditemId !== "string") {
      Modal.error({ content: "시스템에 이상이 있습니다." });
      return;
    }
    try {
      if (!props.isEdit) {
        setIsComplete(true);
        setPrevRating(data.rating);
        await createMarketComment({
          // 댓글 등록
          variables: {
            createUseditemQuestionInput: {
              contents: data.contents,
            },
            useditemId: router.query.useditemId,
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
        setIsComplete(false);
        if (props.setIsEdit) props.setIsEdit(false);
      } else {
        // 댓글 수정
        if (!data.contents) {
          Modal.error({ content: "수정된 내용이 없습니다." });
          return;
        }
        await updateMarketComment({
          variables: {
            updateUseditemQuestionInput: {
              contents: data.contents,
            },
            useditemQuestionId: props.data?._id,
          },
          update(cache, { data }) {
            cache.modify({
              id: cache.identify(data),
              fields: {
                fetchUseditemQuestions: (prev) => {
                  console.log(data.updateUseditemQuestion);

                  return [data.updateUseditemQuestion, ...prev];
                },
              },
            });
          },
        });
        props.setIsEdit(false);
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <CommentsWrite
      onValid={onValid}
      kind="market"
      data={props.data}
      isEdit={props.isEdit}
      isComplete={isComplete}
      prevRating={prevRating}
    />
  );
};
