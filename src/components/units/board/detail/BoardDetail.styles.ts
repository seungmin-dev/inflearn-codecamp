import { EnvironmentOutlined, LinkOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  padding: 20px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 5px 5px 20px #bdbdbd;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #bdbdbd;
`;
export const ProfileImg = styled.img`
  width: 40px;
  margin-right: 10px;
`;
export const WriterInfoWrapper = styled.div`
  flex-grow: 1;
`;
export const Writer = styled.h4`
  padding-bottom: 3px;
`;
export const CreatedAt = styled.p`
  color: #828282;
  font-size: 0.8rem;
`;
export const IconWrapper = styled.div``;
export const LinkIcon = styled(LinkOutlined)`
  color: #ffd600;
  margin-right: 10px;
  font-size: 1.3rem;
`;
export const LocationIcon = styled(EnvironmentOutlined)`
  color: #ffd600;
  font-size: 1.3rem;
`;
export const BoardWrapper = styled.div`
  padding: 20px;
  padding-top: 40px;
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
