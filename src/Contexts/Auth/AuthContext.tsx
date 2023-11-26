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
    AxiosResponse<{ status: number; Message: string; tasks: Task[] | null}>
  >;
  getImage: () => Promise<Buffer>;
  updateImage: (image: File) => Promise<boolean>;
  logout: () => void;
};

export const Authcontext = createContext<AuthContextType>(
  {} as AuthContextType
);
