import { useState, useContext } from "react";
import styles from "./Config.module.css";
import { Authcontext } from "../../Contexts/Auth/AuthContext";
import NewButton from "../button/NewButton";

export default function Config() {
  const [image, setImage] = useState<File | null>(null);
  const auth = useContext(Authcontext);

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (
      file &&
      (file[0].type === "image/png" ||
        file[0].type === "image/jpeg" ||
        file[0].type === "image/jpg" ||
        file[0].type === "image/gif")
    ) {
      setImage(file[0]);
    } else {
      setImage(null);
      return alert("Formato de imagem não suportado! (PNG, JPEG, JPG, GIF)");
    }
  };

  const sendImage = async () => {
    if (image) {
      const result = await auth.updateImage(image);
      if (result) {
        alert("Imagem enviada com sucesso!");
      } else {
        alert("Erro ao enviar a imagem!");
      }
    } else {
      alert("Nenhuma imagem selecionada!");
    }
  };

  const handleClose = () => {
    const config = document.querySelector(`.${styles.config}`);
    if (config) {
      return config.classList.add(styles.hide);
    }
  };

  return (
    <div className={styles.config}>
      <button className={styles.icon} onClick={handleClose}>
        <i className="fa-solid fa-x"></i>
      </button>
      <h1>Configurações</h1>
      <div className={styles.sendfile}>
        <label>Envia sua imagem de perfil</label>
        <input type="file" id={styles.send} onChange={handleImage} />
        <NewButton text={"Enviar"} handleClick={sendImage} />
      </div>
    </div>
  );
}
