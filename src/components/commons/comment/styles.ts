import styled from "@emotion/styled";

export const UserPic = styled.img`
  grid-area: pic;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  margin: 0 auto;
`;
export const UserName = styled.p`
  grid-area: name;
  font-size: 16px;
`;
export const Contents = styled.p`
  grid-area: contents;
  font-size: 16px;
  color: #4f4f4f;
  align-items: start;
`;
export const CommentDate = styled.span`
  grid-area: date;
  grid-column-start: 2;
  font-size: 12px;
  color: #bdbdbd;
`;
