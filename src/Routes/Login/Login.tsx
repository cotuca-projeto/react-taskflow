import Google from "../../svg/google.svg";
import styles from "./login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Contexts/Auth/AuthContext";
import { validInput } from "../../utils/Validators";
import Logo from "../../components/Logo/Logo";

export default function Login() {
  const auth = useContext(Authcontext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [disabled, setDisabled] = useState(false);

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.login(email, password).catch((err) => {
        if (err?.response?.status === 401) {
          console.log(err.response);
          return alert("Ocorreu um erro ao fazer login!");
        }
      });
      if (isLogged) {
        setDisabled(true);
      } else {
        setDisabled(false);
        navigate("/project");
      }
    }
  };

  validInput(email, password);

  useEffect(() => {
    if (auth.user) {
      navigate("/project");
    }
  });

  return (
    <div className={styles.master}>
     <div className={styles.logo}>
      <Logo/>
     </div>
      <div className={styles.ellipse} id={styles.ellipse2}></div>
      <main className={styles.main}>
        <div className={styles.login}>
          <div className={styles.title}>
            {/* <!-- <p>Welcome Back</p> --> */}
            <h3>Entre em sua conta</h3>
          </div>
          <div className={styles.submit}>
            <div className={styles.email}>
              <div className={styles.row}>
                <label htmlFor="email" id="email-label">
                  Email
                </label>
              </div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email-field"
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
                onClick={handleLogin}
                disabled={disabled || !validInput(email, password)}
              >
                Entrar
              </button>
            </div>
            <p id={styles.haveaccount}>
              Não tem uma conta? <NavLink to={"/register"}>Registre-se</NavLink>
            </p>
          </div>
          <button id={styles.continuegoogle}>
            <img src={Google} alt="Icon Google"/>
            Continue com o Google
          </button>
        </div>
      </main>
      <div className={styles.ellipse} id={styles.ellipse1}></div>
    </div>
  );
}
