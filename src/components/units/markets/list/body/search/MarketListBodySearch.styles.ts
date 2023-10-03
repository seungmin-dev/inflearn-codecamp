import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #bdbdbd;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;
export const SearchTab = styled.div`
  padding-left: 20px;
  height: 40px;
  display: flex;
  gap: 20px;
  @media (max-width: 600px) {
    padding-left: 0;
  }
`;
export const SearchOpt = styled.div`
  font-size: 16px;
  background: ${(props: IIsSold) =>
    props.isSelected
      ? "radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(205,205,205,1) 100%)"
      : "white"};
  cursor: pointer;
  border: 1px solid;
  border-color: #e5e8eb;
  border-radius: 20px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease 0s;
  :hover {
    border-color: #8b95a1;
  }
  img {
    width: 25px;
    margin-right: 10px;
  }
`;
interface IIsSold {
  isSelected: boolean;
}
export const SearchOptText = styled.span`
  color: #333d4b;
`;
export const SearchInputs = styled.div`
  display: flex;
`;
export const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 50px;
  border: none;
  background: #f2f2f2;
  margin-right: 10px;
  border-radius: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const SearchIcon = styled(SearchOutlined)`
  margin: 0 10px 0 15px;
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
  border-radius: 20px;
  transition: background-color ease 0.2s all 0s;
  cursor: pointer;
  :hover {
    background-color: #484848;
  }
`;
