import axios from "axios";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { EditTask, Task } from "../types/types";

export const useMutateTask = () => {
  const queryClient = useQueryClient();

  // 新規作成
  const createTaskMutation = useMutation(
    (params: EditTask) =>
      axios.post<Task>("http://127.0.0.1:3000/tasks/", params),
    {
      onSuccess: (res) => {
        const previousTasks = queryClient.getQueryData<Task[]>("tasks");
        if (previousTasks) {
          queryClient.setQueryData<Task[]>("tasks", [
            ...previousTasks,
            res.data,
          ]);
        }
      },
    }
  );
  return { createTaskMutation };
};
