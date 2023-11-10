import NewButton from "../../components/button/NewButton";
import styles from "./Error.module.css";

interface IErrorProps {
  statuscode: number;
  title: string;
}

export default function ({ statuscode, title }: IErrorProps) {
  return (
    <div className={styles.main}>
      <h1 className={styles.statuscode}>{statuscode}</h1>
      <p className={styles.title}>{title}</p>
      <NewButton text="Volte a página inicial"/>
    </div>
  );
}
