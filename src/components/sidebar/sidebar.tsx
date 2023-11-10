import Folders from "../../components/Folders/Folders";
import Options from "../../components/Options/Options";
import Profile from "../../components/Profile/Profile";
import styles from "./sidebar.module.css";
import { InstanceDateProps } from "../../Routes/Container/Container";
import { useState } from "react";

export default function ({ imageUrl, userProfile }: InstanceDateProps) {
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
      <Profile
        imageUrl={
          "https://i.redd.it/vgjbv0xhcrr51.png"
        }
        userProfile={userProfile}
        hide={sidebar}
      />
      <Options hide={sidebar} />
      <Folders hide={sidebar} />
    </div>
  );
}
