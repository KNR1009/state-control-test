import axios from "axios";
import { Task } from "../types/types";
import { useQuery } from "react-query";

export const useQueryTasks = () => {
  const getTasks = async () => {
    const { data } = await axios.get<Task[]>("http://127.0.0.1:3000/tasks");
    console.log("APIコール中");
    return data;
  };

  return useQuery<Task[] | Error>({
    queryKey: "tasks",
    queryFn: getTasks,
    // cacheTime: 5000,
    staleTime: 5000,
  });
};
