import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
export const Card = styled.div`
  height: 350px;
  box-shadow: 2px 2px 10px #ddd;
`;
export const Img = styled.img`
  width: 100%;
  height: 70%;
`;
export const Info = styled.div`
  display: grid;
  grid-template: "name name" 1fr "remarks heart" 1fr "price count" 1.7fr / 1fr 0.1fr;
  grid-column: 1fr 1fr;
  padding: 10px 20px;
`;
export const Name = styled.p`
  grid-area: name;
  display: grid;
  align-items: center;
  font-size: 18px;
  text-wrap: nowrap;
`;
export const Remarks = styled.p`
  grid-area: remarks;
  color: #4f4f4f;
  font-size: 12px;
  display: grid;
  align-items: center;
`;
export const Price = styled.h3`
  grid-area: price;
  display: grid;
  align-items: center;
`;
export const Heart = styled(HeartFilled)`
  grid-area: heart;
  color: #ffd600;
  font-size: 1.3rem;
`;
export const Count = styled.p`
  grid-area: count;
  text-align: center;
  display: grid;
  align-items: center;
`;
