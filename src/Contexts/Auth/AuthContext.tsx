import { createContext } from "react";
import { User } from "../../types/User";

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
  getTasks: () => Promise<any[]>;
  getImage: () => Promise<Buffer>;
  logout: () => void;
};

export const Authcontext = createContext<AuthContextType>(
  {} as AuthContextType
);
