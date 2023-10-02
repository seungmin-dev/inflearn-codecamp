import { useRouter } from "next/router";
import * as S from "../profile/MyProfile.styles";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const MY_PAGE_MANU = [
  { page: "/mypage", name: "내 장터" },
  { page: "/mypage/point", name: "내 포인트" },
  { page: "/mypage/profile", name: "내 프로필" },
];

export const MyPageMenu = (): JSX.Element => {
  const router = useRouter();

  return (
    <S.MenuWrapper>
      {MY_PAGE_MANU.map((el) => (
        <S.Menu key={uuidv4()} isActive={router.pathname === el.page}>
          <Link href={el.page}>
            <a>{el.name}</a>
          </Link>
        </S.Menu>
      ))}
    </S.MenuWrapper>
  );
};
