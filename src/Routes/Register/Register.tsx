import styles from "./register.module.css";
import Google from "../../svg/google.svg";
import { useState, useContext, useEffect } from "react";
import { Authcontext } from "../../Contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { validComplet } from "../../utils/Validators";
import Logo from "../../components/Logo/Logo";
import { AxiosError } from "axios";

export default function Register() {
  const auth = useContext(Authcontext);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  const [disabled, setDisabled] = useState(false);

  const handleRegister = async () => {
    if (firstName && lastName && userName && email && password) {
      const isLogged = await auth
        .register(userName, password, firstName, lastName, email)
        .catch((err: AxiosError<{ status: number; Message: string }>) => {
          return setErrorMessage(
            err.response?.data.Message || "An error occurred"
          );
        });
      
      console.log(isLogged);
      

      if (isLogged) {
        setDisabled(true);
        navigate("/project");
        window.location.reload();
      } else {
        setDisabled(false);
      }
    }
  };

  useEffect(() => {
    if (auth.user) {
      navigate("/project");
    }
  });

  return (
    <main className={styles.main}>
      <div className={styles.bg}>
        <Logo />
        <div className={styles.title}>
          <h3>
            Bem-vindo.
            <br />
            Comece sua jornada agora com nosso sistema de tarefas
          </h3>
        </div>
        <div className={styles.ellipse} id={styles.ellipse1}></div>
      </div>
      <div className={styles.login}>
        <div className={styles.title}>
          <h3>Crie a sua conta aqui</h3>
        </div>
        <div className={styles.submit}>
          <div className={styles.name}>
            <div className={styles.first}>
              <div className={styles.row}>
                <label htmlFor="first-name" id="first-name-label">
                  Nome
                </label>
              </div>
              <input
                type="text"
                name="first-name"
                id="first-name-field"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Gabriel"
                required
                autoComplete="name"
              />
            </div>
            <div className="last-name">
              <div className={styles.row}>
                <label htmlFor="last-name" id="last-name-label">
                  Sobrenome
                </label>
              </div>
              <input
                type="text"
                name="last-name"
                id="last-name-field"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Moreira"
                required
                autoComplete="cc-name"
              />
            </div>
          </div>
          <div className={styles.oncerow}>
            <div className={styles.row}>
              <label htmlFor="user" id={styles.userlabel}>
                Nome de usuário
              </label>
            </div>
            <input
              type="text"
              name="user"
              className="input"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              id="user-field"
              placeholder="Xaulin matador de porco"
              required
              autoComplete="username"
            />
          </div>
          <div className={styles.oncerow}>
            <div className={styles.row}>
              <label htmlFor="email" id="email-label">
                Email
              </label>
            </div>
            <input
              type="email"
              name="email"
              id="email-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="taskflow@gmail.com"
              required
              autoComplete="email"
            />
          </div>
          <div className={styles.oncerow}>
            <div className={styles.row}>
              <label htmlFor="password">Senha</label>
            </div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password-field"
              placeholder="Digite sua senha"
              required
              autoComplete="new-password"
            />
          </div>
          <div className={styles.buttons}>
            <button
              id={styles.create}
              type="submit"
              onClick={handleRegister}
              disabled={
                disabled ||
                !validComplet(firstName, lastName, userName, email, password)
              }
            >
              Crie sua conta
            </button>
          </div>
          <p id={styles.haveaccount}>
            Já tem uma conta? <a href="/login">Log in</a>
          </p>
          {ErrorMessage && <p className={styles.error}>{ErrorMessage}</p>}
        </div>
        <button id={styles.continuegoogle}>
          <img src={Google} alt="Icon Google" />
          Continue com o Google
        </button>
      </div>
    </main>
  );
}
