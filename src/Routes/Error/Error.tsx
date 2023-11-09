import styles from "./Error.module.css";

export default function () {
  return (
    <div className={styles.main}>
      <h1 className={styles.statuscode}>404</h1>
      <p className={styles.title}>Página não encontrada</p>
    </div>
  );
}
