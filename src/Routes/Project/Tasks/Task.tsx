import styles from "./Task.module.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Tasks() {
  const location = useLocation();
  const history = useNavigate();

  function goBack() {
    history(-1);
  }

  return (
    <div>
      <h1>About us</h1>
      <h1>Path: {location.pathname}</h1>
      <button onClick={goBack}>Back</button>
    </div>
  );
}
