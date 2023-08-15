import styled from "@emotion/styled";
import { Modal } from "antd";

export const CommentsWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const CommentsList = styled.div``;
export const CommentsRow = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid #bdbdbd;
`;
export const CommentsProfile = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 8px;
`;
export const CommentsTextWrapper = styled.div`
  flex-grow: 1;
`;
export const CommentsWriter = styled.h5`
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CommentsEtcWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;
export const CommentsStarWrapper = styled.div``;
export const CommentsStar = styled.img`
  width: 18px;
`;
export const CommentsButtonWrapper = styled.div``;
export const CommentsButtonImg = styled.img`
  cursor: pointer;
  width: 16px;
`;
export const CommentsText = styled.input`
  border: none;
  padding-bottom: 10px;
  width: 100%;
`;
export const CommentsCreatedAt = styled.span`
  font-size: 0.7rem;
  color: #bdbdbd;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
