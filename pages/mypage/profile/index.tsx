import { useAuth } from "../../../src/commons/hooks/cutoms/useAuth";
import styled from "@emotion/styled";
import { MySideBar } from "../../../src/components/units/mypage/sidebar/MySideBar.index";
import { MyProfile } from "../../../src/components/units/mypage/profile/MyProfile.index";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`;
export default function ProfilePage(): JSX.Element {
  useAuth();

  return (
    <Wrapper>
      <MySideBar />
      <MyProfile />
    </Wrapper>
  );
}
