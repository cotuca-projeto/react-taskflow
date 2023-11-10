import axios, { AxiosInstance } from "axios";
import { validEmail } from "../utils/Validators";

export default class UserServices {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_LOGIN,
    });
  }

  async login(dados: { email: string; password: string }): Promise<boolean> {
    const { data } = await this.axios.post("/login", dados);
    if (data) {
      localStorage.setItem("nome", data.user.nome);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("id", data.user.id);
      return true;
    }
    return false;
  }

  async register(dados: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
  }): Promise<boolean> {
    if (validEmail(dados.email)) {
      throw new Error("Email inválido");
    }

    const { status, data } = await this.axios.post("/register", dados);
    if (status === 201 || data !== null) {
      return true;
    }
    return false;
  }

  isAuthenticated() {
    const token: string = localStorage.getItem("token")!;
    return token ? true : false;
  }

  async logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
  }
}
