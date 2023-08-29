import styled from "@emotion/styled";

export const NavWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffd600;
  box-shadow: 0 5px 15px #aaa;
`;
export const Nav = styled.div`
  width: 500px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const MenuTitle = styled.span`
  cursor: pointer;
  color: ${(props: IMenuTitle) => (props.isActive ? "black" : "#AB9000")};
`;
interface IMenuTitle {
  isActive: boolean;
}
