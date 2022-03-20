import React from "react";
import { useHistory } from "react-router-dom";
import { useQueryTasks } from "../../../hooks/useQueryTasks";

// キャッシュを格納するコンポーネント
export const ReactQueryA = () => {
  const { status, data } = useQueryTasks();
  let history = useHistory();

  const handleClick = () => {
    history.push("/tasks/b");
  };

  console.log(data);
  console.log(status);

  return (
    <div>
      <p onClick={handleClick}>ReactQueryBへ</p>
    </div>
  );
};
