import { atom } from "recoil";

const taskState = atom({
  key: "taskState",
  default: {},
});

export default taskState;
