import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

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

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLodable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
