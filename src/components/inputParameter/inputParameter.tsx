/* eslint-disable import/no-anonymous-default-export */
import styles from "./inputParameter.module.css";

interface optionsProps {
  icon: string;
  text: string;
  hide: boolean;
  handleClick?: () => any;
}

export default function ({ icon, text, hide, handleClick }: optionsProps) {
  return (
    <div className={styles.optionsparameter} onClick={handleClick}>
      <i className={icon} id={styles.icon}></i>
      <input type={"text"} placeholder={"Pesquisar Tarefas"} className={hide ? styles.none : styles.text}/>
    </div>
  );
}
