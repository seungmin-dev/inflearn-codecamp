import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #bdbdbd;
`;
export const SearchTab = styled.div`
  padding-left: 20px;
  height: 50px;
`;
export const SearchOpt = styled.span`
  line-height: 50px;
  font-size: 18px;
  color: ${(props: IIsSold) => (props.isSelected ? "#000" : "#4F4F4F")};
  text-decoration: ${(props: IIsSold) =>
    props.isSelected ? "underline #ffd600" : ""};
  margin-right: 30px;
  cursor: pointer;
`;
interface IIsSold {
  isSelected: boolean;
}
export const SearchInputs = styled.div`
  display: flex;
`;
export const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 50px;
  border: none;
  background: #f2f2f2;
`;
export const SearchIcon = styled(SearchOutlined)`
  width: 50px;
  font-size: 1.3rem;
  text-align: center;
  padding-left: 15px;
`;
export const SearchInput = styled.input`
  border: none;
  background: transparent;
  flex-grow: 1;
  height: 40px;
  padding-left: 10px;
  margin-right: 10px;
`;
export const SearchDate = styled.input`
  width: 270px;
  margin-right: 20px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
`;
export const SearchButton = styled.button`
  width: 80px;
  height: 50px;
  background: black;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
