import Logo from "../../svg/logo_alternative.svg";
import Unicamp from "../../svg/unicamp.svg";
import Cotuca from "../../svg/cotuca.svg";
import styles from "./footer.module.css";

export default function () {
  const colorFill = "#263238";

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.social}>
          <div className={styles.logo}>
            <p>Taskflow</p>
            <img src={Logo} alt="Logo do Taskflow" />
          </div>
          <ul className={styles.icons}>
            <li>
              <a href="https://www.instagram.com/">
                <i
                  className="fa-brands fa-instagram"
                  style={{ color: colorFill }}
                ></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <i
                  className="fa-brands fa-linkedin"
                  style={{ color: colorFill }}
                ></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <i
                  className="fa-brands fa-youtube"
                  style={{ color: colorFill }}
                ></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <i
                  className="fa-brands fa-twitter"
                  style={{ color: colorFill }}
                ></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <i
                  className="fa-brands fa-facebook"
                  style={{ color: colorFill }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
        <p id={styles.copyright}>© Copyright TaskFlow 2023</p>
        <div className={styles.info}>
          <p>Projeto feito pelos alunos do Colégio Técnico da Unicamp</p>
          <div className={styles.infoLogo}>
            <a href="https://www.unicamp.br/unicamp/">
              <img src={Unicamp} alt="Logo Unicamp" />
            </a>
            <a href="https://cotuca.unicamp.br/">
              <img src={Cotuca} alt="Logo Cotuca" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
