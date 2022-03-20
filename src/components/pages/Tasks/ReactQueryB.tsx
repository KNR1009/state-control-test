import React from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { Task } from "../../../types/types";

export const ReactQueryB = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueriesData<Task[]>("tasks");
  let history = useHistory();

  console.log(data[0][1]);
  const handleClick = () => {
    history.push("/tasks/a");
  };
  return (
    <>
      <p onClick={handleClick}>ReactQueryAへ</p>
      <button>新規タスクの作成</button>
    </>
  );
};
