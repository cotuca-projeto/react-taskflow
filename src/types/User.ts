import { category, task, users } from "@prisma/client";

export type User = {
  id: users["user_id"];
  username: users["username"];
  first_name?: users["first_name"];
  last_name?: users["last_name"];
  email: users["email"];
  password?: users["password_hash"];
  profile_image?: users["profile_image"];
  token?: string;
};

export type Task = {
  id: task["task_id"];
  user_id: users["user_id"];
  title: task["title"];
  description?: task["description"];
  completed?: task["completed"];
  category_id: category["category_id"];
};
