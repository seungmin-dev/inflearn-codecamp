import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
`;
const Menu = styled.ul`
  width: 100%;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Item = styled.li`
  list-style: none;
  width: 100%;
  padding: 20px 0;
  a {
    display: block;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
`;
export const MobNav = (): JSX.Element => {
  return (
    <Wrapper>
      <Menu>
        <Item>
          <Link href="/boards">
            <a>자유게시판</a>
          </Link>
        </Item>
        <Item>
          <Link href="/markets">
            <a>중고마켓</a>
          </Link>
        </Item>
        <Item>
          <Link href="/point">
            <a>포인트 충전</a>
          </Link>
        </Item>
        <Item>
          <Link href="/mypage">
            <a>마이페이지</a>
          </Link>
        </Item>
      </Menu>
    </Wrapper>
  );
};
