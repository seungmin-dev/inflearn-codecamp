import { EnvironmentOutlined, LinkOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 50px auto;
  display: grid;
  align-items: center;
  grid-template:
    "image name link location" 1fr
    "image date link location" 0.8fr / 0.35fr 4fr 0.2fr 0.2fr;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;
export const SellerPic = styled.img`
  grid-area: image;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;
export const SellerName = styled.p`
  grid-area: name;
  font-size: 16px;
`;
export const Date = styled.span`
  grid-area: date;
  color: #828282;
  font-size: 12px;
`;

export const LinkIcon = styled(LinkOutlined)`
  grid-area: link;
  color: #ffd600;
  font-size: 1.3rem;
`;
export const LocationIcon = styled(EnvironmentOutlined)`
  grid-area: location;
  color: #ffd600;
  font-size: 1.3rem;
`;
