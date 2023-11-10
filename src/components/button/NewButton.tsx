import { useNavigate } from "react-router-dom";
import styles from "./NewButton.module.css";

interface IButtonProps {
  text: string;
}

export default function ({ text }: IButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

    return <button onClick={handleClick} className={ styles.button}>{text}</button>;
}
