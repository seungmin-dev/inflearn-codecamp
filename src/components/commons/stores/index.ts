import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userIdState = atom({
  key: "userIdState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfo",
  default: {
    id: "",
    name: "",
    picture: "",
    email: "",
    amount: 0,
  },
});

export const pathState = atom({
  key: "pathState",
  default: "",
});
