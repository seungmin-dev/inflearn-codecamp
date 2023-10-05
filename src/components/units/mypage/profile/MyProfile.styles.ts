import { SettingOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background: #1a1a1a;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;
export const InfoWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;
export const UserPicWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  /* margin: 0 auto 20px; */
`;
export const UserPic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;
export const IconWrapper = styled.div`
  display: ${(props: IProfileProps) => (props.isProfile ? "visible" : "none")};
  cursor: ${(props: IProfileProps) => (props.isProfile ? "pointer" : "")};
`;
export const SettingIcon = styled(SettingOutlined)`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: white;
  padding: 5px;
  color: black;
  border-radius: 100%;
  font-size: 14px;
`;
interface IProfileProps {
  isProfile: boolean;
}
export const UserName = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: white;
`;
export const PointWrapper = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  gap: 10px;
`;
export const PointTitle = styled.p`
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  svg {
    width: 20px;
    margin-right: 5px;
  }
`;
export const UserPoint = styled.p`
  font-size: 18px;
  color: white;
  text-align: center;
`;
export const MenuWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 30px 0;
  justify-content: center;
  gap: 50px;
`;
export const Menu = styled.div`
  a {
    font-size: 18px;
    font-weight: bold;
    color: ${(props: IMenuProps) => (props.isActive ? "black" : "#828282")};
    font-weight: ${(props: IMenuProps) => (props.isActive ? "bold" : "medium")};
  }
`;
interface IMenuProps {
  isActive: boolean;
}

export const Modal = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 1fr 0.3fr 0.2fr;
`;
export const ModalTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;
export const ModalImg = styled.img`
  margin: 0 auto;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 100%;
`;
export const ModalButton = styled.button`
  margin: 40px auto;
  width: 150px;
  height: 50px;
  float: right;
  background-color: #ffd600;
  color: black;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
`;
export const ModalInput = styled.input`
  border: none;
  background-color: #f6f6f6;
  color: 16px;
  ::placeholder {
    color: #bdbdbd;
  }
  height: 50px;
  padding: 0 10px;
  border-radius: 10px;
`;
