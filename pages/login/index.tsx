import { useAuth } from "../../src/components/commons/hooks/cutoms/useAuth";
import Login from "../../src/components/units/login/Login.container";

export default function LoginPage(): JSX.Element {
  useAuth();
  return <Login />;
}
