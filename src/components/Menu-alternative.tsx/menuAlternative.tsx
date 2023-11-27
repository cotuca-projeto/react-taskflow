import { Link } from "react-router-dom";
import styles from "./menuAltenative.module.css";
import Logo from "../Logo/Logo";

export default function menuAlternative() {
  return (
    <nav className={styles.menu}>
      <Logo/>
      <div className={styles["buttons-menu"]}>
        <ul>
          <li>
            <Link to={"/project"}>Tarefas</Link>
          </li>
          <li>
            <Link to={"/login"}>Fazer Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Cadastre-se</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
