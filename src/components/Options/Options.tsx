/* eslint-disable import/no-anonymous-default-export */
import { Authcontext } from "../../Contexts/Auth/AuthContext";
import Config from "../Config/Config";
import InputParameter from "../inputParameter/inputParameter";
import OptionsParameter from "../optionsParameter/optionsParameter";
import styles from "./options.module.css";
import { useContext, useState } from "react";

interface optionsProps {
  hide: boolean;
}

export default function ({ hide }: optionsProps) {
  const auth = useContext(Authcontext);

  const [showConfig, setShowConfig] = useState(false);

  const handleShowConfig = () => {
    setShowConfig(!showConfig);
  };

  return (
    <div className={styles.options}>
      <InputParameter
        icon={"fa-solid fa-magnifying-glass"}
        text={"Pesquisa"}
        hide={hide}
      />
      <OptionsParameter
        icon={"fa-solid fa-gear"}
        text={"Configurações"}
        hide={hide}
        handleClick={handleShowConfig}
      />
      {showConfig && <Config />}
      <OptionsParameter
        icon={"fa-solid fa-right-from-bracket"}
        text={"Logout"}
        hide={hide}
        handleClick={auth.logout}
      />
    </div>
  );
}
