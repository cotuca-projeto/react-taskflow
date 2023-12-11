import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Authcontext } from "../../../Contexts/Auth/AuthContext";
import Editor from "../../../components/Editor/Editor";
import NewButton from "../../../components/button/NewButton";

export default function NewTask() {
  const location = useLocation();
  const auth = useContext(Authcontext);
  const navi = useNavigate();

  return (
    <>
      <Editor />
      
    </>
  );
}
