import { useRecoilState } from "recoil";
import { userInfoState } from "../../stores";
import { useEffect, useState } from "react";

interface IUseCommentAuthArgs {
  kind: string;
  userId: string;
}

export const useCommentAuth = (
  args: IUseCommentAuthArgs,
): { owner: boolean; guest: boolean } => {
  const [userInfo] = useRecoilState(userInfoState);
  const [owner, setOwner] = useState(false);
  const [guest, setGuest] = useState(false);

  // 자유게시판 - 비회원 댓글 생성 수정 삭제 가능

  // 자유게시판 - 회원, 댓글 주인(수정 삭제 가능)
  // 자유게시판 - 회원, 댓글 주인 X
  // 중고마켓 - 비회원, X
  // 중고마켓 - 회원, 댓글 주인(수정 삭제 가능)
  // 중고마켓 - 회원, 판매자(답댓글)
  useEffect(() => {
    if (userInfo.id === "" && args.kind === "board") setGuest(true);
    if (userInfo.id !== "") {
      // 회원
      if (args.kind === "board") {
        if (userInfo.id === args.userId) setOwner(true);
      } else if (args.kind === "market") {
        if (userInfo.id === args.userId) setOwner(true);
      }
    }
  }, []);

  return {
    owner,
    guest,
  };
};
