import Logo from "../../svg/logo.svg";
import styles from "./menu.module.css";

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
