import React from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useMutateTask } from "../../../hooks/useMutateTask";
import { Task } from "../../../types/types";

export const ReactQueryB = () => {
  const queryClient = useQueryClient();
  const { createTaskMutation } = useMutateTask();
  const data = queryClient.getQueriesData<Task[]>("tasks");
  let history = useHistory();

  console.log(data[0][1]);
  const handleClick = () => {
    history.push("/tasks/a");
  };

  const createTask = () => {
    // 新規作成用データ(定数)
    const tmp = {
      title: "新規作成タスク",
      tag: 1,
      tag_name: "新規作成タグ",
    };
    createTaskMutation.mutate(tmp);
  };
  return (
    <>
      <p onClick={handleClick}>ReactQueryAへ</p>
      <button onClick={createTask}>新規タスクの作成</button>
    </>
  );
};
