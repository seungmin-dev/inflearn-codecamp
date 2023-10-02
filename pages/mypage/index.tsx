import { useAuth } from "../../src/commons/hooks/cutoms/useAuth";
import { MyMarket } from "../../src/components/units/mypage/market/MyMarket.index";
import { MyPageMenu } from "../../src/components/units/mypage/menu";
import { MyProfile } from "../../src/components/units/mypage/profile/MyProfile.index";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1200px;
  min-height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default function MyPage(): JSX.Element {
  useAuth();

  return (
    <Wrapper>
      <MyProfile />
      <MyPageMenu />
      <MyMarket />
    </Wrapper>
  );
}
