import { createContext } from "react";
import { Task, User } from "../../types/User";
import { AxiosResponse } from "axios";
import { OutputData } from "@editorjs/editorjs";

export type AuthContextType = {
  user: User | null;
  register: (
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    email: string
  ) => Promise<boolean>;
  login: (
    email: string,
    password: string
  ) => Promise<Boolean>;
  getTasks: () => Promise<
    AxiosResponse<{ message: string; tasks: Task[] | null }>
  >;
  getImage: () => Promise<Buffer>;
  getTask: (id: number) => Promise<AxiosResponse<{ message: string, task: Task[] | null }>>;
  updateTask: (id: number, json: OutputData) => Promise<boolean>;
  createTask: (json: OutputData) => Promise<AxiosResponse<{message: string}>>;
  updateImage: (image: File) => Promise<boolean>;
  logout: () => void;
};

export const Authcontext = createContext<AuthContextType>(
  {} as AuthContextType
);
