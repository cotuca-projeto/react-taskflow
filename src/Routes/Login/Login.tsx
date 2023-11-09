import Logo from "../../svg/logo.svg";
import Google from "../../svg/google.svg";
import styles from "./login.module.css";
import React, { MouseEventHandler, useState } from "react";
import { validEmail, validPassword } from "../../utils/Validators";
import UserServices from "../../services/userServices";
import { NavLink, useNavigate } from "react-router-dom";

const userService = new UserServices();

export default function () {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const HandleSubmitLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await userService.login({
        email: form.email,
        password: form.password,
      });
      console.log(response);
      if (response) {
        alert("Usuário logado com sucesso");
        navigate("/home");
      }
      return setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Erro ao fazer login");
      return setLoading(false);
    }
  };

  const validInput = (): boolean => {
    return validEmail(form.email) && validPassword(form.password);
  };

  return (
    <div className={styles.master}>
      <div className={styles.logo}>
        <p>TaskFlow</p>
        <img src={Logo} alt="Logo-TaskFlow" />
      </div>
      <div className={styles.ellipse} id={styles.ellipse2}></div>
      <main className={styles.main}>
        <div className={styles.login}>
          <div className={styles.title}>
            {/* <!-- <p>Welcome Back</p> --> */}
            <h3>Entre em sua conta</h3>
          </div>
          <form action="" method="post" className={styles.submit}>
            <div className={styles.email}>
              <div className={styles.row}>
                <label htmlFor="email" id="email-label">
                  Email
                </label>
              </div>
              <input
                type="email"
                name="email"
                id="email-field"
                onChange={handleChangeForm}
                placeholder="taskflow@gmail.com"
                required
                autoComplete="email"
              />
            </div>
            <div className={styles.password}>
              <div className={styles.row}>
                <label htmlFor="password">Senha</label>
                <NavLink to={"/forget"} id={styles.forget}>
                  Esqueceu sua senha?
                </NavLink>
              </div>
              <input
                type="password"
                name="password"
                id="password-field"
                onChange={handleChangeForm}
                placeholder="Digite sua senha"
                required
                autoComplete="new-password"
              />
            </div>
            <div className={styles.buttons}>
              <button
                id={styles.create}
                type="submit"
                onClick={
                  HandleSubmitLogin as unknown as MouseEventHandler<HTMLButtonElement>
                }
                disabled={loading || !validInput()}
              >
                Entrar
              </button>
            </div>
            <p id={styles.haveaccount}>
              Não tem uma conta? <NavLink to={"/register"}>Registre-se</NavLink>
            </p>
          </form>
          <button id={styles.continuegoogle}>
            <img src={Google} />
            Continue com o Google
          </button>
        </div>
      </main>
      <div className={styles.ellipse} id={styles.ellipse1}></div>
    </div>
  );
}
