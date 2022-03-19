import React from "react";
import { useSetRecoilState } from "recoil";
import recoilTestState from "../../recoil/atoms/taskState";

export const RecoilInputTest = () => {
  const setTask = useSetRecoilState(recoilTestState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
    // 未使用エラー回避
  };

  return (
    <div>
      <p>入力値がrecoilのstateを変更します</p>
      <input onChange={onChange}></input>
    </div>
  );
};
