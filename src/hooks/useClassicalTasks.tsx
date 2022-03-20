import axios from "axios";
import { useEffect, useState } from "react";
import { Task } from "../types/types";

export const useClassicalTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // マウント時にAPIコール
  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data } = await axios.get("http://127.0.0.1:3000/tasks");
        console.log("APIコール中");
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  }, []);
  return { tasks };
};
