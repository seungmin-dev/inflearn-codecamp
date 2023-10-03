import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import LayoutHeader from "./header/LayoutHeader.index";
import { MobNav } from "./mobNav/MobNav.index";
import { useState } from "react";

interface ILayoutProps {
  children: JSX.Element;
}

const ChildWrapper = styled.div`
  padding: 80px 10px 0;
`;

export default function Layout(props: ILayoutProps): JSX.Element {
  const [nav, setNav] = useState(false);
  return (
    <>
      <LayoutHeader setNav={setNav} />
      {nav ? <MobNav /> : null}
      <ChildWrapper>{props.children}</ChildWrapper>
      <LayoutFooter />
    </>
  );
}
