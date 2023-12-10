import { useContext, useEffect } from "react";
import styles from "./Task.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Authcontext } from "../../../Contexts/Auth/AuthContext";

export default function NewTask() {
  const location = useLocation();
  const history = useNavigate();
  const auth = useContext(Authcontext);
  const navi = useNavigate();

  function goBack() {
    history(-1);
  }

  useEffect(() => {
    auth.getTask(location.pathname as unknown as number).then((res) => {
      if (res.data.task === null) {
        
      }
    });
  }, []);

  return (
    <div>
      <h1>About us</h1>
      <h1>Path: {location.pathname}</h1>
      <button onClick={goBack}>Back</button>
    </div>
  );
}
