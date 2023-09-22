import { EnterOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const ReplyWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
`;
export const CommentForm = styled.form`
  display: block;
  width: 100%;
  max-width: 800px;
  margin: 30px auto 0;
`;
export const CommentsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const GuestInfoWrapper = styled.div``;
export const GuestInfoInput = styled.input`
  border: none;
  height: 50px;
  width: 150px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  margin-right: 10px;
  :last-child {
    margin-right: 20px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  border: 1px solid #bdbdbd;
`;
export const ReplyIcon = styled(EnterOutlined)`
  width: 5%;
  font-size: 1.5rem;
  transform: scale(-1, 1);
`;
export const TextWrapper = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
`;
export const TextArea = styled.textarea`
  grid-area: contents;
  width: 100%;
  height: 110px;
  padding: 20px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const Bottom = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Length = styled.span`
  font-size: 16px;
  color: #bdbdbd;
  padding-left: 20px;
`;
export const Button = styled.button`
  width: 90px;
  height: 50px;
  border: none;
  background-color: black;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
