import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../components/commons/stores";

export default function LayoutHeader(): JSX.Element {
  const [userInfo] = useRecoilState(userInfoState);

  return <LayoutHeaderUI userInfo={userInfo} />;
}
