import React from "react";
import { useRecoilValue } from "recoil";
import taskState from "../../recoil/atoms/taskState";

export const RecoilOutput = () => {
  const task = useRecoilValue(taskState);
  console.log(task);
  return (
    <div>
      <p>Recoilの出力結果です</p>
      <p>{task}</p>
    </div>
  );
};
