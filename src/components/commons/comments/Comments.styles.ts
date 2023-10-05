import styled from "@emotion/styled";
import { Modal } from "antd";

export const CommentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;
export const CommentItem = styled.div`
  display: grid;
  grid-template:
    "picture writer rate edit delete" 0.5fr
    "picture contents contents edit delete" 1.5fr
    "picture date date edit delete" 0.4fr / 0.3fr 1fr 4fr 0.15fr 0.15fr;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid #bdbdbd;
  margin: 20px 0;
`;
export const CommentProfile = styled.img`
  grid-area: picture;
  width: 36px;
  height: 36px;
  margin-right: 8px;
  border-radius: 100%;
`;
export const CommentWriter = styled.h5`
  grid-area: writer;
  margin-bottom: 2px;
  align-items: center;
`;
export const CommentStarWrapper = styled.div`
  grid-area: rate;
`;
export const CommentStar = styled.img`
  /* width: 18px; */
`;
export const CommentEditButton = styled.img`
  grid-area: edit;
  cursor: pointer;
  width: 16px;
`;
export const CommentDeleteButton = styled.img`
  grid-area: delete;
  cursor: pointer;
  width: 16px;
`;
export const CommentContents = styled.input`
  grid-area: contents;
  border: none;
  padding-bottom: 10px;
  width: 100%;
`;
export const CommentCreatedAt = styled.span`
  grid-area: date;
  font-size: 0.7rem;
  color: #bdbdbd;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin: 30px 0 10px;
  height: 50px;
  border: 1px solid #bdbdbd;
  padding: 10px;
`;
