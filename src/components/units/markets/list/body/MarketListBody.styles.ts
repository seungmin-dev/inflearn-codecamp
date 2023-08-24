import { EuroOutlined, HeartFilled, SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: auto;
  margin-top: 80px;
`;
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
  width: 280px;
  height: 50px;
  border: none;
  background: #f2f2f2;
  margin-right: 20px;
`;
export const SearchIcon = styled(SearchOutlined)`
  width: 40px;
  font-size: 1.3rem;
  text-align: center;
`;
export const SearchInput = styled.input`
  border: none;
  background: transparent;
  width: 240px;
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
export const List = styled.div`
  width: 100%;
  /* height: auto; */
  height: 1000px;
  padding: 10px;
  overflow-y: scroll;
`;
export const Row = styled.div`
  width: 100%;
  height: 180px;
  display: grid;
  grid-template:
    "image name name price" 0.9fr
    "image remarks remarks price" 0.5fr
    "image tags tags price" 0.5fr
    "image seller count price" 1fr / 0.27fr 0.2fr 0.9fr 0.3fr;
  margin-bottom: 20px;
  padding-bottom: 10px;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;
export const ItemImg = styled.img`
  grid-area: image;
  width: 160px;
  height: 160px;
`;
export const Name = styled.p`
  grid-area: name;
  font-size: 28px;
`;
export const Remarks = styled.p`
  grid-area: remarks;
  font-size: 16px;
  color: #4f4f4f;
`;
export const Tags = styled.div`
  grid-area: tags;
  font-size: 16px;
  color: #bdbdbd;
`;
export const EuroMark = styled(EuroOutlined)`
  color: #ffd600;
  margin-right: 5px;
`;
export const Price = styled.h3`
  grid-area: price;
  text-align: right;
  font-size: 24px;
  padding-right: 20px;
`;
export const SellerPic = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  margin-right: 8px;
`;
export const Seller = styled.div`
  grid-area: seller;
  font-size: 16px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
`;
export const Heart = styled(HeartFilled)`
  color: #ffd600;
  font-size: 1.3rem;
  margin-right: 8px;
`;
export const Count = styled.span`
  grid-area: count;
  font-size: 16px;
  color: #4f4f4f;
`;
