export type User = {
  id: number;
  email: string;
  password: string;
  username: string;
  first_name: string;
  last_name: string;
  photo?: string | null;
  token?: string;
  tasks: Task[] | null;
};

export type Task = {
  id: number;
  task_id: number;
  user: number;
  title: string;
  description: string | null;
  due_date: Date | null;
  completed: string;
  priority: number;
  category_id: number | null;
};