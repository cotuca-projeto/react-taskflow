import { Link } from "react-router-dom";
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
