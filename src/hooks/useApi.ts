import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API || "http://localhost:3001",
});

export const useTaskAPI = {
  // Base das Tasks do Usuário
  createTask: async (
    title: string,
    description: string,
    token: string,
    user: number
  ) => {
    const response = await api.post("/api/tasks/create", {
      title,
      description,
      token,
      user,
    });
    return response;
  },

  deleteTask: async (id: number, token: string) => {
    const response = await api.delete("/api/tasks/delete", {
      params: { id, token },
    });
    return response;
  },

  getTask: async (id: number, token: string) => {
    const options = {
      params: { id },
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await api.post("/api/tasks/gettask", options);
    return response;
  },

  getTasks: async () => {
    const config = {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const response = await api.get("/api/tasks/gettasks", config);

    return response;
  },

  updateTask: async (
    id: number,
    title: string,
    description: string,
    token: string
  ) => {
    const response = await api.put("/api/tasks/updatetask", {
      id,
      title,
      description,
      token,
    });
    return response;
  },
};

export const useUserAPI = {
  // Base de Usuários
  validateToken: async (token: string) => {
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    const response = await api.get("/api/validate", config);

    return response;
  },
  register: async (
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    email: string
  ) => {
    const options = {
      username: username,
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
    };
    const response = await api.post("/api/users/register", options);
    return response;
  },

  logout: async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("photo");
  },

  getImage: async () => {
    const response = await api.get("/api/users/getimage", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response;
  },

  login: async (email: string, password: string) => {
    const params = new URLSearchParams({
      email: email,
      password: password,
    });

    const response = await api.post("/api/users/login", params);

    return response;
  },

  updateImage: async (image: File) => {
    const response = await api.put(
      "/api/users/updateimage",
      { image },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  },
};

export default useTaskAPI;
