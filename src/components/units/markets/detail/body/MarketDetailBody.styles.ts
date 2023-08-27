import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Carousel } from "antd";

export const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
`;
export const ItemInfoWrapper = styled.div`
  display: grid;
  grid-template:
    "remarks heart" 1fr
    "name count" 1fr
    "price price" 1.6fr / 1fr 0.1fr;
  align-items: center;
`;
export const Remarks = styled.p`
  grid-area: remarks;
  font-size: 18px;
  color: #bdbdbd;
`;
export const Name = styled.p`
  grid-area: name;
  font-size: 24px;
  color: #4f4f4f;
`;
export const HeartIcon = styled(HeartFilled)`
  grid-area: heart;
  color: #ffd600;
  font-size: 1.3rem;
  margin: 0 auto;
`;
export const Count = styled.p`
  grid-area: count;
  text-align: center;
`;
export const Price = styled.h3`
  grid-area: price;
  font-size: 36px;
`;
export const Contents = styled.div`
  font-size: 18px;
  color: #4f4f4f;
  margin: 40px auto;
`;
export const ItemCarousel = styled(Carousel)`
  width: 70%;
  height: 400px;
  margin: 50px auto;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
`;
export const Tags = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  border-bottom: 1px solid #bdbdbd;
`;
export const Tag = styled.span`
  font-size: 16px;
  color: #bdbdbd;
  margin-right: 10px;
`;
