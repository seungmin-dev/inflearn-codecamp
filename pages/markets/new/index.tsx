import { useAuth } from "../../../src/components/commons/hooks/cutoms/useAuth";
import MarketNew from "../../../src/components/units/markets/new/MarketNew.index";

export default function MarketNewPage(): JSX.Element {
  useAuth();
  return <MarketNew />;
}
