import Link from "next/link";
import { useQueryFetchUserLoggedIn } from "../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { replaceNumberComma } from "../../../commons/libraries/utils";
import * as S from "./MySideBar.styles";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export const MySideBar = (): JSX.Element => {
  const router = useRouter();
  const { data } = useQueryFetchUserLoggedIn();
  const MY_PAGE_MANU = [
    { page: "/mypage", name: "내 장터" },
    { page: "/mypage/point", name: "내 포인트" },
    { page: "/mypage/profile", name: "내 프로필" },
  ];
  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.InfoTitle>MYPAGE</S.InfoTitle>
        <S.UserPic
          src={`https://storage.googleapis.com/${data?.fetchUserLoggedIn?.picture}`}
          onError={(event) =>
            (event.currentTarget.src = "/images/icons/profile.png")
          }
        />
        <S.UserName>{data?.fetchUserLoggedIn?.name}</S.UserName>
        <S.UserPoint>
          {replaceNumberComma(data?.fetchUserLoggedIn?.userPoint.amount)}
        </S.UserPoint>
      </S.InfoWrapper>
      <S.MenuWrapper>
        <ul>
          {MY_PAGE_MANU.map((el) => (
            <S.Menu key={uuidv4()} isActive={router.pathname === el.page}>
              <Link href={el.page}>
                <a>{el.name}</a>
              </Link>
            </S.Menu>
          ))}
        </ul>
      </S.MenuWrapper>
    </S.Wrapper>
  );
};
