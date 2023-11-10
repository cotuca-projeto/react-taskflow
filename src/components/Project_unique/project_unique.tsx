import styles from "./project_unique.module.css";

interface project_uniqueProps {
  nameProject: string;
  hide: boolean;
}

export default function ({ nameProject, hide }: project_uniqueProps) {
  return (
    <button className={styles.project}>
          <i className="fa-solid fa-chevron-right" id={hide ? styles.none : "icon"}></i>
      <i className="fa-solid fa-book"></i>
      <p id={hide ? styles.none : styles.nameproject}>{nameProject}</p>
    </button>
  );
}
