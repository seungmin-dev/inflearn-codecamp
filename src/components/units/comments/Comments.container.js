import { useMutation, useQuery } from "@apollo/client";
import CommentsUI from "./Comments.presenter";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./Comments.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CommentsContainer() {
  const [commentsLength, setCommentsLength] = useState(0);
  const [comments, setComments] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.id,
    },
  });
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onChangeTextarea = (event) => {
    setComments(event.target.value.slice(0, 100));
    setCommentsLength(event.target.value.length);
  };

  const onClickSubmit = async () => {
    if (!comments) {
      alert("댓글을 입력해주세요.");
      return;
    }
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: "임시작성자",
            password: "1234",
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
      alert(error.message);
    }
  };

  const onClickDelete = async (boardCommentId) => {
    const result = deleteBoardComment({
      variables: {
        password,
        boardCommentId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.id },
        },
      ],
    });
  };
  return (
    <CommentsUI
      data={data}
      onChangeTextarea={onChangeTextarea}
      commentsLength={commentsLength}
      comments={comments}
      onClickSubmit={onClickSubmit}
      onClickDelete={onClickDelete}
    />
  );
}
