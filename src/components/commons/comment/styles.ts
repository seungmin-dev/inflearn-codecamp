import {
  CloseOutlined,
  EditOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template: ${(props: IRowProps) =>
    !props.isEdit
      ? "'pic name icons' 1.8fr 'pic contents contents' auto 'date date date' 1fr / 0.6fr 10fr 0.5fr"
      : "'pic name' 1.8fr 'pic contents' auto 'date date' 1fr / 0.6fr 10fr"};
  padding-bottom: 20px;
`;
interface IRowProps {
  isEdit: boolean;
}
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
  padding-bottom: 10px;
`;
export const Icons = styled.div`
  grid-area: icons;
  display: flex;
  flex-direction: row-reverse;
  color: #bdbdbd;
  span {
    margin-right: 10px;
  }
`;
export const EditIcon = styled(EditOutlined)``;
export const DeleteIcon = styled(CloseOutlined)``;
export const CommentIcon = styled(MessageOutlined)``;
export const Contents = styled.p`
  grid-area: contents;
  font-size: 16px;
  color: #4f4f4f;
  align-items: start;
  padding-bottom: 10px;
`;
export const CommentDate = styled.span`
  grid-area: date;
  grid-column-start: 2;
  font-size: 12px;
  color: #bdbdbd;
`;
