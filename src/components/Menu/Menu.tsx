import Logo from "../../svg/logo.svg";
import "./menu.css";

export default function () {
  return (
    <nav className="menu">
      <div className="logo">
        <p>Taskflow</p>
        <img src={Logo} alt="Logo-TaskFlow" />
      </div>
      <div className="buttons-menu">
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
