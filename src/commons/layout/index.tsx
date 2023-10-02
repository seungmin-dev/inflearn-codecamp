import LayoutFooter from "./footer";
import LayoutHeader from "./header/LayoutHeader.index";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <div style={{ paddingTop: "80px" }}>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
