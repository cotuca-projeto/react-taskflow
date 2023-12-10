import { createContext } from "react";
import { Task, User } from "../../types/User";
import { AxiosResponse } from "axios";

export type AuthContextType = {
  user: User | null;
  register: (
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    email: string
  ) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  getTasks: () => Promise<
    AxiosResponse<{ message: string; tasks: Task[] | null }>
  >;
  getImage: () => Promise<Buffer>;
  getTask: (id: number) => Promise<AxiosResponse<{ task: Task[] | null }>>;
  updateImage: (image: File) => Promise<boolean>;
  logout: () => void;
};

export const Authcontext = createContext<AuthContextType>(
  {} as AuthContextType
);
