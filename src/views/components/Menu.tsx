import Logo from '../logo.svg';
import '../../style/menu.css';

export default function () {
  return <>
    <nav className='menu'>
      <div className="ellipse" id="ellipse-1"></div>
      <div className="logo">
        <p>Taskflow</p>
        <img src={Logo} alt="Logo-TaskFlow" />
      </div>
      <div className="buttons-menu">
        <ul>
          <li><a href="/login">Fazer Login</a></li>
          <li><a href="/register">Cadastre-se</a></li>
        </ul>
      </div>
      <div className="ellipse" id="ellipse-2"></div>
    </nav>
  </>
}