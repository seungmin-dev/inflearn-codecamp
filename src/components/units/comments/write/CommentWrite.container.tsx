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
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
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

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onChangeTextarea = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value.slice(0, 100));
  };

  const onClickSubmit = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    if (!contents) {
      alert("댓글을 입력해주세요.");
      return;
    }
    try {
      if (typeof router.query.id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: star,
          },
          boardId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      });
      console.log(result);
      setWriter("");
      setPassword("");
      setContents("");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    if (contents === "") {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (password === "") {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents !== "") updateBoardCommentInput.contents = contents;
      if (star !== props.item?.rating) updateBoardCommentInput.rating = star;

      if (typeof props.item?._id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
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
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTextarea={onChangeTextarea}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      writer={writer}
      password={password}
      contents={contents}
      setStar={setStar}
      isEdit={props.isEdit}
      item={props.item}
    />
  );
}
