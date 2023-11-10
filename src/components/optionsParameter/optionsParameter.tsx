import styles from "./optionsparameter.module.css";

interface optionsProps {
  icon: string;
  text: string;
  hide: boolean;
}

export default function ({ icon, text, hide }: optionsProps) {
  return (
    <button className={styles.optionsparameter}>
      <i className={icon} id={styles.icon}></i>
      <p className={hide ? styles.none : styles.text}>{text}</p>
    </button>
  );
}
