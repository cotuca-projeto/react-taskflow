import Logo from "../../svg/logo.svg";
import Google from "../../svg/google.svg";
import styles from "./login.module.css";

export default function () {
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
                placeholder="taskflow@gmail.com"
                required
                autoComplete="email"
              />
            </div>
            <div className={styles.password}>
              <div className={styles.row}>
                <label htmlFor="password">Senha</label>
                <a href="#" id={styles.forget}>
                  Esqueceu sua senha?
                </a>
              </div>
              <input
                type="text"
                name="password"
                id="password-field"
                placeholder="Digite sua senha"
                required
                autoComplete="new-password"
              />
            </div>
            <div className={styles.buttons}>
              <button id={styles.create} type="submit">
                Entrar
              </button>
            </div>
            <p id={styles.haveaccount}>
              Não tem uma conta? <a href="/register">Registre-se</a>
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
