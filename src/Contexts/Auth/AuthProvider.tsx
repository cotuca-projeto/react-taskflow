import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { Authcontext } from "./AuthContext";
import useApi from "../../hooks/useApi";
import { AxiosResponse } from "axios";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        try {
          const response = await api.validateToken(storageData);
          const data = response.data;
          if (data?.user) {
            setUser(data.user);
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
    await api.logout();
    setUser(null);
    localStorage.clear();
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const setUserStorage = (user: User) => {
    localStorage.setItem("username", user.username);
    localStorage.setItem("email", user.email);
    localStorage.setItem("id", user.id.toString());
    if (user.profile_image) {
      localStorage.setItem(
        "profile_image",
        user.profile_image as unknown as string
      );
    }
    localStorage.setItem("first_name", user.first_name as string);
    localStorage.setItem("last_name", user.last_name as string);
  };

  const login = async (email: string, password: string) => {
    const response = await api.login(email, password);
    if (!response) {
      return false;
    }
    const data = response.data;
    if (data?.user && data?.token) {
      setUser(data.user);
      setToken(data.token);
      setUserStorage(data.user);
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
    const response = await api.register(
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
    if (data?.user && data?.token) {
      setUser(data.user);
      setToken(data.token);
      setUserStorage(data.user);
      return true;
    } else {
      return false;
    }
  };

  const getTasks = async () => {
    const response = await api.getTasks();
    const data = response.data;
    return data;
  };

  const getImage = async () => {
    const response = await api.getImage();
    const data = response.data;
    if (data) {
      localStorage.setItem("profile_image", data);
    }
    return data;
  };

  const updateImage = async (image: File) => {
    const response = await api.updateImage(image);
    const data = response.data;
    if (data) {
      localStorage.setItem("profile_image", data);
    }
    return data;
  };

  return (
    <Authcontext.Provider
      value={{
        user,
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
