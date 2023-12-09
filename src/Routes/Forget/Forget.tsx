import Logo from "../../components/Logo/Logo";
import NewButton from "../../components/button/NewButton";
import styles from "./Forget.module.css";

export default function Forget(): JSX.Element {
  return (
    <div className={styles.main}>
      <Logo />
      <div className={styles.form}>
        <h1>Esqueceu sua senha?</h1>
        <p>Enviaremos um e-mail com instruções de como redefiniar a sua senha.</p>
        <div className={styles.submit}>
          <label>E-mail</label>
          <input type="email"/>
        </div>
        <NewButton text={"Enviar"} handleClick={() => {
            return alert("Funcionalidade em Desenvolvimento")
        }}/>
      </div>
    </div>
  );
}
