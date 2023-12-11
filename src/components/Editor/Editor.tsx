import { useContext, useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { Authcontext } from "../../Contexts/Auth/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Editor.module.css";
import NewButton from "../button/NewButton";

export default function Editor(): JSX.Element {
  const auth = useContext(Authcontext);
  const [title, setTitle] = useState("Titulo");
  const [description, setDescription] = useState("");
  const history = useNavigate();
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<EditorJS>();
  const location = useLocation();
  const id = parseInt(location.pathname.replace("/project/", ""));

  function goBack() {
    history(-1);
  }

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log(id);

    if (id) {
      auth.getTask(id).then((res) => {
        res.data.task?.map((task) => {
          setTitle(task.title ?? "");
          setDescription(task.description ?? "");
        });
      });
    } else {
      setTitle("");
      setDescription("");
    }
  }, []);

  const editorConfig = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;

    if (!ref.current) {
      ref.current = new EditorJS({
        autofocus: true,
        defaultBlock: "paragraph",
        minHeight: 500,
        inlineToolbar: true,
        placeholder: "Let`s write an awesome story!",
        onReady: () => {
          console.log("Editor.js is ready to work!");
        },
        holder: "editorjs",
        tools: {
          header: Header,
        },
        data: {
          blocks: [
            {
              type: "header",
              data: {
                text: title,
                level: 1,
              },
            },
            {
              type: "paragraph",
              data: {
                text: description,
              },
            },
          ],
        },
        onChange: () => {
          console.log("something changed");
        },
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await editorConfig();
    };

    if (isMounted) {
      init();
    }
    return () => {
      if (ref.current) {
        ref.current.destroy();
      }
    };
  }, [isMounted]);

  const save = async () => {
    if (ref.current) {
      ref.current.save().then((outputData) => {
        console.log("Article data: ", outputData);
        if (outputData.blocks.length < 2) {
          setErrorMessage("Preencha todos os campos");
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
          return;
        }
        if (id) {
          auth.updateTask(id, outputData);
        } else {
          auth.createTask(outputData);
        }
      });
    }
  };

  return (
    <>
      <div id={"editorjs"} className={styles.editorjs}></div>
      <div className={styles.buttons}>
        <NewButton text={"Salvar"} handleClick={save}></NewButton>
        {errorMessage && <p>{errorMessage}</p>}
        <NewButton text={"Voltar"} handleClick={goBack} />
      </div>
    </>
  );
}
