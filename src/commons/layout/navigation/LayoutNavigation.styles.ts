import styled from "@emotion/styled";

export const NavWrapper = styled.div`
  flex-grow: 1;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const MenuTitle = styled.span`
  font-weight: bold;
  cursor: pointer;
`;
