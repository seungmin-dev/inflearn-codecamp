import { EuroOutlined, HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1420px;
  height: 1200px;
  display: flex;
  align-items: flex-start;
`;
export const LeftWrapper = styled.div`
  width: 1200px;
  height: auto;
  margin-right: 20px;
`;
export const RightWrapper = styled.div`
  width: 200px;
  height: 505px;
`;
export const List = styled.div`
  width: 100%;
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
  margin-right: 10px;
`;
export const Price = styled.h3`
  display: flex;
  flex-direction: row-reverse;
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
  display: flex;
  font-size: 16px;
  color: #4f4f4f;
`;
