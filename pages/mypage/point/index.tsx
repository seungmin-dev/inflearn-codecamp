import { useAuth } from "../../../src/commons/hooks/cutoms/useAuth";
import styled from "@emotion/styled";
import { MyProfile } from "../../../src/components/units/mypage/profile/MyProfile.index";
import { MyPonint } from "../../../src/components/units/mypage/point/MyPoint.index";
import { MyPageMenu } from "../../../src/components/units/mypage/menu";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export default function PointPage(): JSX.Element {
  useAuth();

  return (
    <Wrapper>
      <MyProfile />
      <MyPageMenu />
      <MyPonint />
    </Wrapper>
  );
}
