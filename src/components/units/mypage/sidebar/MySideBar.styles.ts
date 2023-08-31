import { SettingOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 200px;
  margin-top: 10px;
  padding-top: 55px;
  margin-right: 20px;
  border-right: 1px solid #f2f2f2;
`;
export const InfoWrapper = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;
export const InfoTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 40px;
`;
export const UserPicWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
`;
export const UserPic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;
export const SettingIcon = styled(SettingOutlined)`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #ffd600;
  padding: 5px;
  color: #fff;
  border-radius: 100%;
  font-size: 14px;
  display: ${(props: IProfileProps) => (props.isProfile ? "visible" : "none")};
  cursor: ${(props: IProfileProps) => (props.isProfile ? "pointer" : "")};
`;
interface IProfileProps {
  isProfile: boolean;
}
export const UserName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;
export const UserPoint = styled.p`
  font-size: 16px;
  color: #4f4f4f;
`;
export const MenuWrapper = styled.div``;
export const Menu = styled.li`
  text-align: center;
  margin-bottom: 20px;
  list-style: none;
  a {
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
