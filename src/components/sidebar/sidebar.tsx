import Folders from "../Folders/Folders";
import Options from "../Options/Options";
import Profile from "../Profile/Profile";
import styles from "./sidebar.module.css";
import { useState } from "react";

export default function () {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={sidebar ? styles.hide : styles.sidebar}>
      <button className={styles.btnhide} onClick={showSidebar}>
        <i
          className={
            sidebar ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-left"
          }
        ></i>
      </button>
      <Profile hide={sidebar} />
      <Options hide={sidebar} />
      <Folders hide={sidebar} />
    </div>
  );
}
