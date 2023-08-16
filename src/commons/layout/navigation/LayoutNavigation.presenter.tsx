import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";
import type { ILayoutNavigationProps } from "./LayoutNavigation.types";
export default function LayoutNavigationUI(
  props: ILayoutNavigationProps,
): JSX.Element {
  const NAVIGATION_MENUS = [
    { name: "라이브강아지", page: "/dogs" },
    { name: "라이브게시판", page: "/boards" },
    { name: "라이브상품", page: "/markets" },
    { name: "마이페이지", page: "/mypages" },
  ];

  return (
    <S.NavWrapper>
      <S.Nav>
        {NAVIGATION_MENUS.map((item) => (
          <Fragment key={item.page}>
            <S.MenuTitle id={item.page} onClick={props.onClickMenu}>
              {item.name}
            </S.MenuTitle>
          </Fragment>
        ))}
      </S.Nav>
    </S.NavWrapper>
  );
}
