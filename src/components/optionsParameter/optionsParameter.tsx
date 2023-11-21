import styles from "./optionsparameter.module.css";

interface optionsProps {
  icon: string;
  text: string;
  hide: boolean;
  handleClick?: () => any;
}

export default function ({ icon, text, hide, handleClick }: optionsProps) {
  return (
    <button className={styles.optionsparameter} onClick={handleClick}>
      <i className={icon} id={styles.icon}></i>
      <p className={hide ? styles.none : styles.text}>{text}</p>
    </button>
  );
}
