import React from "react";
import { useRecoilValue } from "recoil";
import recoilTestState from "../../recoil/atoms/taskState";

export const RecoilOutput = () => {
  const recoilTest = useRecoilValue(recoilTestState);
  console.log(recoilTest);
  return (
    <div>
      <p>Recoilの出力結果です</p>
      <p>{recoilTest}</p>
    </div>
  );
};
