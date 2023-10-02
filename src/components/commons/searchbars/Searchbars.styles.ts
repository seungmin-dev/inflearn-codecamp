import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
  border-radius: 20px;
`;
export const SearchInputBox = styled.div`
  display: flex;
  width: 350px;
  height: 50px;
  border: none;
  background: #f2f2f2;
  border-radius: 20px;
  overflow: hidden;
`;
export const SearchIcon = styled(SearchOutlined)`
  width: 40px;
  height: 100%;
  font-size: 1.3rem;
  text-align: center;
  margin-left: 15px;
`;
export const SearchInput = styled.input`
  border: none;
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 8px;
  flex-grow: 1;
  height: 50px;
`;
