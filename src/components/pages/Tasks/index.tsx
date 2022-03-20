import { useClassicalTasks } from "../../../hooks/useClassicalTasks";
import { Task } from "../../../types/types";

export const Tasks = () => {
  const { tasks } = useClassicalTasks();
  console.log(tasks);

  return <div>タスクページです</div>;
};
