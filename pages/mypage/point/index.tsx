import { useAuth } from "../../../src/components/commons/hooks/cutoms/useAuth";
import styled from "@emotion/styled";
import { MySideBar } from "../../../src/components/units/mypage/sidebar/MySideBar.index";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`;
export default function PointPage(): JSX.Element {
  useAuth();

  return (
    <Wrapper>
      <MySideBar />
      {/* <MyMarket /> */}
    </Wrapper>
  );
}
