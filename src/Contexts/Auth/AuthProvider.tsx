import { useEffect, useState } from "react";
import { Task, User } from "../../types/User";
import { AuthContextType, Authcontext } from "./AuthContext";
import { AxiosResponse } from "axios";
import { useTaskAPI, useUserAPI } from "../../hooks/useApi";
import { OutputData } from "@editorjs/editorjs";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("token");
      if (storageData) {
        try {
          const response = await useUserAPI.validateToken(storageData);
          const data = response.data;
          if (!!data?.user) {
            setUser(data.user);
            setUserStorage(data.user);
          } else {
            setUser(null);
          }
        } catch (err: any) {
          if (err?.response && err?.response?.status === 401) {
            console.log("Unauthorized. Redirecting to login page...");
          } else {
            console.log("An error occurred:", err?.message);
          }
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    };
    validateToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const logout = async () => {
    await useUserAPI.logout();
    setUser(null);
    localStorage.clear();
  };

  const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  const setUserStorage = (user: User) => {
    localStorage.setItem("username", user.username);
    localStorage.setItem("email", user.email);
    // localStorage.setItem("id", user.id.toString());
    if (user.photo) {
      localStorage.setItem("profile_image", user.photo as unknown as string);
    }
    localStorage.setItem("first_name", user.first_name as string);
    localStorage.setItem("last_name", user.last_name as string);
  };

  const login = async (email: string, password: string) => {
    const response = await useUserAPI.login(email, password);
    if (!response) {
      return false;
    }
    const data = response.data;
    if (data?.token) {
      setToken(data.token);
      setUserStorage((await useUserAPI.validateToken(data.token)).data.user);
      return true;
    } else {
      return false;
    }
  };

  const register = async (
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    email: string
  ) => {
    const response = await useUserAPI.register(
      username,
      password,
      first_name,
      last_name,
      email
    );
    if (!response) {
      return false;
    }
    const data = (response as AxiosResponse<any>).data;
    if (data?.user || data?.token) {
      setUser(data.user);
      setToken(data.token);
      setUserStorage(data.user);
      return true;
    } else {
      return false;
    }
  };

  const getTasks = async () => {
    const response = await useTaskAPI.getTasks();
    const data = response.data;
    return data;
  };

  const getImage = async () => {
    const response = await useUserAPI.getImage();
    const data = response.data;
    if (data) {
      localStorage.setItem("profile_image", data);
    }
    return data;
  };

  const updateImage = async (image: File) => {
    const response = await useUserAPI.updateImage(image);
    const data = response.data;
    if (data) {
      const profileImage = data.user.photo as unknown as string;
      localStorage.setItem("profile_image", profileImage);
    }
    return !!data;
  };

  const getTask = async (id: number) => {
    const token = localStorage.getItem("token") ?? "";
    const response = await useTaskAPI.getTask(id, token);
    const data = response.data;
    return data;
  };

  const updateTask = async (id: number, json: OutputData) => {
    const token = localStorage.getItem("token") ?? "";
    const response = await useTaskAPI.updateTask(id, json, token);
    const data = response.data;
    return data;
  };

  const createTask = async (json: OutputData) => {
    const token = localStorage.getItem("token") ?? "";
    const response = await useTaskAPI.createTask(json, token);
    const userWithTask = {
      ...response.data.user,
      task: response.data.task, // Adicione a tarefa ao usuário
    };
    setUserStorage(userWithTask);
    setUser(userWithTask);
    setToken(response.data.token);
    return response;
  };

  return (
    <Authcontext.Provider
      value={{
        createTask,
        updateTask,
        user,
        getTask,
        register,
        logout,
        login,
        getTasks,
        getImage,
        updateImage,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};
