import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const List = styled.div`
  width: 100%;
`;
export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template:
    "pic name icons" 1.8fr
    "pic contents contents" 2.5fr
    "date date date" 1fr / 0.6fr 10fr 0.5fr;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;
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
