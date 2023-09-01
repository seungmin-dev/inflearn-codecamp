import type { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";
import CommentWriteUI from "./CommentWrite.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";
import type { ICommentWriteProps } from "./CommentWrite.types";

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    contents: "",
  });
  const [star, setStar] = useState(0);

  const router = useRouter();

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
  };

  const onClickSubmit = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    if (!inputs.contents) {
      alert("댓글을 입력해주세요.");
      return;
    }
    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: inputs.writer,
            password: inputs.password,
            contents: inputs.contents,
            rating: star,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setInputs({ writer: "", password: "", contents: "" });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    if (inputs.contents === "") {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (inputs.password === "") {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (inputs.contents !== "")
        updateBoardCommentInput.contents = inputs.contents;
      if (star !== props.item?.rating) updateBoardCommentInput.rating = star;

      if (typeof props.item?._id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: inputs.password,
          boardCommentId: props.item?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <CommentWriteUI
      onChangeInputs={onChangeInput}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      inputs={inputs}
      setStar={setStar}
      isEdit={props.isEdit}
      item={props.item}
    />
  );
}
