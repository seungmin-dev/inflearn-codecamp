import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 200px;
  /* height: 505px; */
  height: auto;
  border: 1px solid #bdbdbd;
  padding: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Title = styled.h2`
  font-size: 18px;
  text-align: center;
  padding-bottom: 20px;
`;
export const Item = styled.div`
  width: 160px;
  height: 200px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #bdbdbd;
`;
export const CountWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
export const ItemHeart = styled(HeartFilled)`
  color: #ffd600;
  width: 18px;
  height: 18px;
`;
export const ItemLike = styled.span`
  font-size: 12px;
  margin-left: 4px;
`;
export const ItemImage = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 auto 12px;
  object-fit: contain;
`;
export const ItemTitle = styled.h2`
  font-size: 14px;
  padding-bottom: 4px;
`;
export const ItemRemarks = styled.p`
  font-size: 12px;
  color: #4f4f4f;
  padding-bottom: 8px;
`;
export const ItemPrice = styled.h2`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 8px;
`;
export const ItemTags = styled.span`
  font-size: 10px;
  color: #bdbdbd;
`;
