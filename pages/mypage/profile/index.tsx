import { useAuth } from "../../../src/commons/hooks/cutoms/useAuth";
import styled from "@emotion/styled";
import { MyProfile } from "../../../src/components/units/mypage/profile/MyProfile.index";
import { MyProfileEdit } from "../../../src/components/units/mypage/profile-edit/MyProfileEdit.index";
import { MyPageMenu } from "../../../src/components/units/mypage/menu";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export default function ProfilePage(): JSX.Element {
  useAuth();

  return (
    <Wrapper>
      <MyProfile />
      <MyPageMenu />
      <MyProfileEdit />
    </Wrapper>
  );
}
