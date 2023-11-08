import Logo from '../../svg/logo_alternative.svg'
import Unicamp from '../../svg/unicamp.svg'
import Cotuca from '../../svg/cotuca.svg'
import './footer.css'

export default function () {
  const colorFill = "#263238"

  return (<>
    <footer>
      <div className="social">
        <div className="logo">
          <p>Taskflow</p>
          <img src={Logo} alt="Logo do Taskflow" />
        </div>
        <ul className="icons">
          <li><a href=""><i className="fa-brands fa-instagram" style={{ color: colorFill }}></i></a></li>
          <li><a href=""><i className="fa-brands fa-linkedin" style={{ color: colorFill }}></i></a></li>
          <li><a href=""><i className="fa-brands fa-youtube" style={{ color: colorFill }}></i></a></li>
          <li><a href=""><i className="fa-brands fa-twitter" style={{ color: colorFill }}></i></a></li>
          <li><a href=""><i className="fa-brands fa-facebook" style={{ color: colorFill }}></i></a></li>
        </ul>
      </div>
      <p id='copyright'>© Copyright TaskFlow 2023</p>
      <div className="info">
        <p>Projeto feito pelos alunos do Colégio Técnico da Unicamp</p>
        <div className='infoLogo'>
          <img src={Unicamp} alt="Logo Unicamp" />
          {/* <img src={Cotuca} alt="Logo Cotuca" /> */}
        </div>
        
      </div>
    </footer>
  </>)
}