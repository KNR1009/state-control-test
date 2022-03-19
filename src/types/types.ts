export type Task = {
  title: string;
  tag: number;
  tag_name: string;
  created_at: string;
  updated_at: string;
};

export type EditTask = Omit<Task, "created_at" | "updated_at">;
// TODO: taskとタグを1:Nの関係にする
export type Tag = {
  name: string;
};
