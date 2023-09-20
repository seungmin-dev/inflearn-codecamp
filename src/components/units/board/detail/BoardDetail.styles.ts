import {
  DislikeOutlined,
  EnvironmentOutlined,
  LikeOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Container = styled.div``;
export const HeaderWrapper = styled.div`
  width: 800px;
  margin: 50px auto;
  align-items: center;
  display: grid;
  grid-template:
    "image name link location" 1fr
    "image date link location" 0.8fr / 0.35fr 4fr 0.2fr 0.2fr;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;
export const ProfileImg = styled.img`
  grid-area: image;
  width: 48px;
  margin-right: 10px;
`;
export const Writer = styled.p`
  font-size: 16px;
  grid-area: name;
`;
export const CreatedAt = styled.p`
  color: #828282;
  font-size: 12px;
  grid-area: date;
`;
export const IconWrapper = styled.div``;
export const LinkIcon = styled(LinkOutlined)`
  grid-area: link;
  color: #ffd600;
  font-size: 1.3rem;
`;
export const LocationIcon = styled(EnvironmentOutlined)`
  color: #ffd600;
  font-size: 1.3rem;
  grid-area: location;
`;
export const BoardWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
`;
export const Title = styled.h2`
  font-size: 1.8rem;
  padding-bottom: 50px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  gap: 5px;
  margin: 30px 0 50px;
`;
export const Image = styled.img`
  max-height: 100%;
`;
export const Contents = styled.p`
  padding-bottom: 50px;
`;
export const LikeWrapper = styled.div`
  display: grid;
  margin: 70px auto 50px;
  width: 180px;
  height: 80px;
  text-align: center;
  grid-template:
    "likeIcon dislikeIcon" 1fr
    "likeCount dislikeCount" 0.8fr / 1fr 1fr;
`;
export const LikeIcon = styled(LikeOutlined)`
  grid-area: likeIcon;
  margin: 0 auto;
  font-size: 24px;
  color: #ffd600;
  cursor: pointer;
`;
export const LikeCount = styled.span`
  grid-area: likeCount;
  font-size: 18px;
  color: #ffd600;
`;
export const DislikeIcon = styled(DislikeOutlined)`
  grid-area: dislikeIcon;
  margin: 0 auto;
  font-size: 24px;
  color: #828282;
  cursor: pointer;
`;
export const DislikeCount = styled.span`
  grid-area: dislikeCount;
  color: #828282;
  font-size: 18px;
`;
export const FooterWrapper = styled.div`
  padding-bottom: 60px;
  border-bottom: 1px solid #bdbdbd;
  margin: 0 auto 100px;
`;
export const BtnWrapper = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding-top: 50px;
`;
export const Btn = styled.button`
  background-color: #fff;
  border: none;
  border: 1px solid #bdbdbd;
  width: 140px;
  padding: 8px 0;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    color: black;
  }
`;
