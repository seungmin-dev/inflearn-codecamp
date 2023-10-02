import { LikeFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  width: 1200px;
  height: 300px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
`;
export const CarouselWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.08),
    4px 12px 36px rgba(0, 0, 0, 0.09);
`;
export const Card = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 30px;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`;
export const CardImg = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    overflow: hidden;
  }
`;
export const CardInfo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: "title title title title" 1fr "name name name name" 1fr "date date thumb count" 1fr "button button button button" 1fr / 1fr 1fr 0.3fr 0.2fr;
  padding: 40px 40px 40px 30px;
  align-items: center;
`;
export const CardTitle = styled.h2`
  grid-area: title;
  font-size: 24px;
`;
export const CardWriter = styled.span`
  grid-area: name;
  font-size: 20px;
  display: flex;
  gap: 5px;
`;
export const CardProfileImg = styled.img`
  width: 30px;
  height: 30px;
`;
export const CardThumbs = styled(LikeFilled)`
  grid-area: thumb;
  font-size: 20px;
  color: #ffd600;
`;
export const CardCreatedAt = styled.span`
  grid-area: date;
  font-size: 18px;
  color: #828282;
`;
export const CardLike = styled.span`
  grid-area: count;
  font-size: 18px;
  padding-top: 5px;
`;
export const NewWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 30px;
  padding: 50px 0 0 30px;
  overflow: hidden;
  background: linear-gradient(
    220deg,
    rgba(169, 255, 240, 1) 0%,
    rgba(155, 204, 255, 1) 100%
  );
  cursor: pointer;
  transition: transform 0.2s ease 0s;
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.08),
    4px 12px 36px rgba(0, 0, 0, 0.09);
  img {
    width: 150px;
    position: absolute;
    right: -20px;
    bottom: -5px;
    transition: transform 0.2s ease 0s;
  }
  :hover {
    transform: translateY(-5px);
    img {
      transform: scale(120%);
    }
  }
`;
export const ButtonTitle = styled.h2`
  margin-bottom: 20px;
`;
export const ButtonText = styled.p``;
export const Button = styled.div`
  grid-area: button;
  width: 120px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  transition: transform 0.2s ease 0s;
  cursor: pointer;
  :hover {
    transform: translateY(-5px);
  }
`;
