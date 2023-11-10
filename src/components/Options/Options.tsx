import OptionsParameter from "../optionsParameter/optionsParameter";
import styles from "./options.module.css";

interface optionsProps {
  hide: boolean;
}

export default function ({ hide }: optionsProps) {
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
    </div>
  );
}
