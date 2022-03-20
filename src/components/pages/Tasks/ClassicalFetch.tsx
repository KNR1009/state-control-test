import React from "react";
import { useClassicalTasks } from "../../../hooks/useClassicalTasks";

export const ClassicalFetch = () => {
  const { tasks } = useClassicalTasks();
  console.log(tasks);

  return <div>タスクページです</div>;
};
