import dynamic from "next/dynamic";
import * as S from "./ViewItemList.styles";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { ViewItem } from "./ViewItem.index";
import { todayViewState } from "../../../commons/stores";

export const ViewItemList = (): JSX.Element => {
  const StickyBox = dynamic(async () => await import("react-sticky-box"), {
    ssr: false,
  });
  const [todayView] = useRecoilState(todayViewState);

  return (
    <StickyBox offsetTop={20} offsetBottom={20}>
      <S.Container>
        <S.Title>최근 본 상품</S.Title>
        {todayView.length > 1 ? (
          todayView.map((el) => <ViewItem key={uuidv4()} el={el} />)
        ) : (
          <S.Text>상품을 구경해보세요 !</S.Text>
        )}
      </S.Container>
    </StickyBox>
  );
};
