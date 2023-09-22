import { useRouter } from "next/router";
import { useMutationCreateBoardComment } from "../../../../../commons/hooks/mutations/useMutationCreateBoardComment";
import { CommentsWrite } from "../../../../commons/comments/write/CommentsWrite.index";
import { Modal } from "antd";
import { useMutationUpdateBoardComment } from "../../../../../commons/hooks/mutations/useMutationUpdateBoardComment";
import type {
  ICommentFormProps,
  IcommentBoardProps,
} from "../../../../commons/comments/Comments.types";
import { useState, type Dispatch, type SetStateAction } from "react";

interface IBoardCommentWrite {
  data?: IcommentBoardProps;
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}
export const BoardCommentsWrite = (props: IBoardCommentWrite): JSX.Element => {
  const router = useRouter();
  const [isComplete, setIsComplete] = useState(false);
  const [prevRating, setPrevRating] = useState(0);
  const [createBoardComment] = useMutationCreateBoardComment();
  const [updateBoardComment] = useMutationUpdateBoardComment();

  const onValid = async (data: ICommentFormProps): Promise<void> => {
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      if (!props.isEdit) {
        setIsComplete(true);
        setPrevRating(data.rating);
        // 새댓글
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: data.writer,
              password: data.password,
              contents: data.contents,
              rating: data.rating ?? prevRating,
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
        setIsComplete(false);
        if (props.setIsEdit) props.setIsEdit(false);
      } else {
        // 댓글 수정
        if (!data.contents) {
          Modal.error({ content: "수정된 내용이 없습니다." });
          return;
        }
        await updateBoardComment({
          variables: {
            updateBoardCommentInput: {
              contents: data.contents,
              rating: data.rating,
            },
            boardCommentId: props.data._id,
            password: data.password,
          },
          update(cache, { data }) {
            cache.modify({
              id: cache.identify(data),
              fields: {
                fetchBoardComments: (prev) => {
                  return [data.updateBoardComment, ...prev];
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
      kind="board"
      data={props.data}
      isEdit={props.isEdit}
      isComplete={isComplete}
      prevRating={prevRating}
    />
  );
};
