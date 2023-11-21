import { useContext, useEffect, useState } from "react";
import Project_unique from "../Project_unique/project_unique";
import styles from "./folders.module.css";
import { Authcontext } from "../../Contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

interface foldersProps {
  hide: boolean;
}

export default function ({ hide }: foldersProps) {
  const [tasks, setTasks] = useState<any[]>([]);
  const auth = useContext(Authcontext);
  const navi = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await auth.getTasks().catch((err) => {
      console.error(err);
    });

    if (data) setTasks(data);
  };

  const handleClick = () => {
    navi("/project/newtask", { replace: false });
  };

  return (
    <div className={styles.folders}>
      <div className={styles.private}>
        <p id={styles.title}>Privado</p>
        <div className={styles.projects}>
          <button onClick={handleClick}>Nova Tarefa</button>
          {tasks.length > 0 ? (
            tasks.map((task: any) => (
              <Project_unique key={task.id} title={task.title} hide={hide} />
            ))
          ) : (
            <p>Não há tarefas</p>
          )}
        </div>
      </div>
    </div>
  );
}
