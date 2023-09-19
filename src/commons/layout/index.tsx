import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header/LayoutHeader.index";
import { LayoutNavigation } from "./navigation/LayoutNavigation.index";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      {props.children}
      <LayoutFooter />
    </>
  );
}
