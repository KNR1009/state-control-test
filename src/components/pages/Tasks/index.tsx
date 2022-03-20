import { useClassicalTasks } from "../../../hooks/useClassicalTasks";

export const Tasks = () => {
  const { tasks } = useClassicalTasks();
  console.log(tasks);

  return <div>タスクページです</div>;
};
