export type User = {
  id: number;
  username: string;
  first_name?: string;
  last_name?: string;
  email: string;
  password?: string;
  profile_image?: Buffer | null;
  token?: string;
};

export type Task = {
  id: number;
  user_id: string;
  title: string;
  description?: string;
  completed?: string;
  category_id: number;
};
