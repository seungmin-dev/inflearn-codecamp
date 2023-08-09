import { useMutation, useQuery } from "@apollo/client";
import CommentsUI from "./Comments.presenter";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./Comments.queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../commons/types/generated/types";

export default function CommentsContainer() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [commentsLength, setCommentsLength] = useState(0);
  const [commentsUpdateLength, setCommentsUpdateLength] = useState(0);
  const [comments, setComments] = useState("");
  const [commentsUpdate, setCommentsUpdate] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.id,
    },
  });
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComments(event.target.value.slice(0, 100));
    setCommentsLength(event.target.value.length);
  };

  const onChangeUpdateTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentsUpdate(event.target.value.slice(0, 100));
    setCommentsUpdateLength(event.target.value.length);
  };

  const onClickSubmit = async () => {
    if (!comments) {
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
            contents: comments,
            rating: 4.5,
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
      setComments("");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickEdit = () => {
    setIsEdit(true);
  };

  // const onClickUpdate = async (boardCommentId: string) => {
  //   try {
  //     const result = updateBoardComment({
  //       variables: {
  //         boardCommentId,
  //         updateBoardCommentInput: {
  //           contents: "",
  //           rating: 2,
  //         },
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_BOARD_COMMENTS,
  //           variables: { boardId: router.query.id },
  //         },
  //       ],
  //     });
  //   } catch (error) {
  //     if (error instanceof Error) alert(error.message);
  //   }
  // };
  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    try {
      if (!(event.target instanceof HTMLImageElement)) {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = deleteBoardComment({
        variables: {
          password: "tempPassword",
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <CommentsUI
      data={data}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTextarea={onChangeTextarea}
      onChangeUpdateTextarea={onChangeUpdateTextarea}
      commentsLength={commentsLength}
      commentsUpdateLength={commentsUpdateLength}
      comments={comments}
      commentsUpdate={commentsUpdate}
      isEdit={isEdit}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      // onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
    />
  );
}
