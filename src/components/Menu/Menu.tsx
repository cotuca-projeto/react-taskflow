import Logo from "../Logo/Logo";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Logo/>
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
