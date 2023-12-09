import { useEffect } from "react";
import styles from "./Task.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import useApi from "../../../hooks/useApi";

export default function Tasks() {
  const location = useLocation();
  const history = useNavigate();
  const api = useApi();

  function goBack() {
    history(-1);
  }

  useEffect(() => {}, []);

  return (
    <div>
      <h1>About us</h1>
      <h1>Path: {location.pathname}</h1>
      <button onClick={goBack}>Back</button>
    </div>
  );
}
