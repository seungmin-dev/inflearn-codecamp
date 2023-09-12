import dynamic from "next/dynamic";
import * as S from "./ViewItemList.styles";
import { useRecoilState } from "recoil";
import { todayViewState } from "../../commons/stores";
import { v4 as uuidv4 } from "uuid";
import { ViewItem } from "./ViewItem.index";

export const ViewItemList = (): JSX.Element => {
  const StickyBox = dynamic(async () => await import("react-sticky-box"), {
    ssr: false,
  });
  const [todayView] = useRecoilState(todayViewState);

  return (
    <StickyBox offsetTop={20} offsetBottom={20}>
      <S.Container>
        <S.Title>최근 본 상품</S.Title>
        {todayView.map((el) => (
          <ViewItem key={uuidv4()} el={el} />
        ))}
      </S.Container>
    </StickyBox>
  );
};
