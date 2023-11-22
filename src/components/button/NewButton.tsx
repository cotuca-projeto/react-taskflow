import { useNavigate } from "react-router-dom";
import styles from "./NewButton.module.css";

interface IButtonProps {
  text: string;
  handleClick?: () => void;
}

export default function ({ text, handleClick }: IButtonProps) {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleClick ? handleClick : handleClickNavigate}
      className={styles.button}
    >
      {text}
    </button>
  );
}
