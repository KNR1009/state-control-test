import { atom } from "recoil";

const recoilTestState = atom({
  key: "recoilTestState",
  default: "未入力",
});

export default recoilTestState;
