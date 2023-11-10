import Project_unique from "../Project_unique/project_unique";
import styles from "./folders.module.css";

interface foldersProps {
  hide: boolean;
}

export default function ({ hide }: foldersProps) {
  return (
    <div className={styles.folders}>
      <div className={styles.private}>
        <p id={styles.title}>Privado</p>
        {/* Lembrar de utilizar o banco de dados para capturar o projeto do usuario e colocar aqui dentro do valor */}
        <div className={styles.projects}>
          <Project_unique hide={hide} nameProject="Primeiro Projeto" />
          <Project_unique hide={hide} nameProject="Segundo Projeto" />
          <Project_unique hide={hide} nameProject="Terceiro Projeto" />
          <Project_unique hide={hide} nameProject="Quarto Projeto" />
          <Project_unique hide={hide} nameProject="Quinto Projeto" />
          <Project_unique hide={hide} nameProject="Sexto Projeto" />
          <Project_unique hide={hide} nameProject="Sextímo Projeto" />
        </div>
      </div>
    </div>
  );
}
