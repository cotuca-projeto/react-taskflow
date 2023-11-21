import { Authcontext } from "../../Contexts/Auth/AuthContext";
import OptionsParameter from "../optionsParameter/optionsParameter";
import styles from "./options.module.css";
import { useContext } from "react";
interface optionsProps {
  hide: boolean;
}

export default function ({ hide }: optionsProps) {
  const auth = useContext(Authcontext);

  return (
    <div className={styles.options}>
      <OptionsParameter
        icon={"fa-solid fa-magnifying-glass"}
        text={"Pesquisa"}
        hide={hide}
      />
      <OptionsParameter
        icon={"fa-solid fa-gear"}
        text={"Configurações"}
        hide={hide}
      />
      <OptionsParameter
        icon={"fa-solid fa-right-from-bracket"}
        text={"Logout"}
        hide={hide}
        handleClick={auth.logout}
      />
    </div>
  );
}
