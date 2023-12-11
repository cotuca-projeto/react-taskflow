import { useContext, useEffect, useState } from "react";
import Project_unique from "../Project_unique/project_unique";
import styles from "./folders.module.css";
import { Authcontext } from "../../Contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { Task } from "../../types/User";
import NewButton from "../button/NewButton";

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
    try {
      const response = await auth.getTasks();

      if (
        response.data &&
        response.data.tasks &&
        response.data.tasks.length > 0
      ) {
        setTasks(response.data.tasks);
      } else {
        setTasks([]);
      }
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  const handleClick = () => {
    navi("/project/newtask", { replace: false });
  };

  return (
    <div className={styles.folders}>
      <div className={styles.private}>
        <p id={styles.title}>Privado</p>
        <div className={styles.projects}>
          {tasks.length > 0 ? (
            tasks.map((task: any) => (
              <Project_unique key={task.id} title={task.title} hide={hide} />
            ))
          ) : (
            <p>Não há tarefas</p>
          )}
          <NewButton text={"Nova Tarefa"} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
