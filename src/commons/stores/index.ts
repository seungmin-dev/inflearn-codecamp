import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

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
  effects_UNSTABLE: [persistAtom],
});

export const pathState = atom({
  key: "pathState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const todayViewState = atom({
  key: "todayViewState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLodable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
