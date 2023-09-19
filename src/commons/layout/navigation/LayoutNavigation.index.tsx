import { useRouter } from "next/router";
import * as S from "./LayoutNavigation.styles";
import { Fragment, type MouseEvent } from "react";

export const LayoutNavigation = (): JSX.Element => {
  const router = useRouter();
  const NAVIGATION_MENUS = [
    // { name: "강아지", page: "/dogs" },
    { name: "자유게시판", page: "/boards" },
    { name: "중고마켓", page: "/markets" },
    { name: "포인트충전", page: "/point" },
    { name: "마이페이지", page: "/mypage" },
  ];
  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };
  return (
    <S.NavWrapper>
      <S.Nav>
        {NAVIGATION_MENUS.map((item) => (
          <Fragment key={item.page}>
            <S.MenuTitle
              id={item.page}
              onClick={onClickMenu}
              isActive={router.pathname.startsWith(item.page)}
            >
              {item.name}
            </S.MenuTitle>
          </Fragment>
        ))}
      </S.Nav>
    </S.NavWrapper>
  );
};
