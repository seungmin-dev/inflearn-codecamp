import { useTodayView } from "../../../src/commons/hooks/cutoms/useTodayView";
import MarketDetail from "../../../src/components/units/markets/detail/MarketDetail.index";

export default function MarketDetailPage(): JSX.Element {
  useTodayView();
  return <MarketDetail />;
}
