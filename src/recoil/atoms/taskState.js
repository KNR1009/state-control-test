import { atom } from "recoil";

const taskState = atom({
  key: "taskState",
  default: "未入力",
});

export default taskState;
