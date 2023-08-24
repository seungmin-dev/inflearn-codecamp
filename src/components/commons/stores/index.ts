import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const pathState = atom({
  key: "pathState",
  default: "",
});
