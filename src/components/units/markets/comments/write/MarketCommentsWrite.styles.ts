import { EditOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-bottom: 50px;
`;
export const WriteIcon = styled(EditOutlined)`
  font-size: 20px;
  color: #ffd600;
  margin-right: 10px;
`;
export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 40px;
`;
export const Container = styled.div`
  border: 1px solid #bdbdbd;
`;
export const TextArea = styled.textarea`
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
