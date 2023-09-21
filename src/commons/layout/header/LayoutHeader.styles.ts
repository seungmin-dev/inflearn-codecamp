import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
`;
export const Header = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img`
  width: 180px;
  height: auto;
  cursor: pointer;
`;
export const BtnWrapper = styled.div``;
export const LoginButton = styled.button`
  border: none;
  background-color: transparent;
  height: 40px;
  padding: 0 15px;
  border-radius: 5px;
  cursor: pointer;
`;
export const SignupButton = styled.button`
  border: none;
  background-color: #ffd600;
  height: 40px;
  padding: 0 15px;
  border-radius: 5px;
  cursor: pointer;
`;
export const UserInfoWrapper = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const UserPic = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  object-fit: cover;
`;
export const UserName = styled.span`
  width: 100px;
  height: 100%;
  line-height: 48px;
`;
