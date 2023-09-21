import { useAuth } from "../../src/commons/hooks/cutoms/useAuth";
import { MyMarket } from "../../src/components/units/mypage/market/MyMarket.index";
import { MySideBar } from "../../src/components/units/mypage/sidebar/MySideBar.index";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`;

export default function MyPage(): JSX.Element {
  useAuth();

  return (
    <Wrapper>
      <MySideBar />
      <MyMarket />
    </Wrapper>
  );
}
