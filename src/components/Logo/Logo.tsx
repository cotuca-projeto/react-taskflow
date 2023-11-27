import { Link } from "react-router-dom";
import LogoIcon from "../../svg/logo.svg";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <>
      <Link className={styles.logo} to={"/"}>
        <p>Taskflow</p>
        <img src={LogoIcon} alt="Logo-TaskFlow" />
      </Link>
    </>
  );
}
