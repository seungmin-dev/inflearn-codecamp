import { useAuth } from "../../src/commons/hooks/cutoms/useAuth";
import { Point } from "../../src/components/units/point/Point.index";

export default function PointPage(): JSX.Element {
  useAuth();
  return <Point />;
}
