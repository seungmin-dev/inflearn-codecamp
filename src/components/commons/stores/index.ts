import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userEmailState = atom({
  key: "userEmailState",
  default: "",
});

export const pathState = atom({
  key: "pathState",
  default: "",
});
