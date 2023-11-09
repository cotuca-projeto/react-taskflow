import Logo from "../../svg/logo_black.svg";
import styles from "./menuAltenative.module.css";

export default function () {
  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>
        <p>Taskflow</p>
        <img src={Logo} alt="Logo-TaskFlow" />
      </div>
      <div className={styles["buttons-menu"]}>
        <ul>
          <li>
            <a href="/login">Fazer Login</a>
          </li>
          <li>
            <a href="/register">Cadastre-se</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
