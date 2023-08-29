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
export const UserPic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  margin-bottom: 20px;
`;
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
