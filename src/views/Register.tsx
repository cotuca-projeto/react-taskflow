import '../style/register.css';
import Logo from './logo.svg';
import Google from './google.svg';

export default function() {
  return (
      <main>
        <div className="bg">
          <div className="logo">
            <p>TaskFlow</p>
            <img src={Logo} alt="Logo-TaskFlow" />
          </div>
          <div className="title">
            <h3>
              Bem-vindo.<br />Comece sua jornada agora com nosso sistema de
              tarefas
            </h3>
          </div>
          <div className="ellipse" id="ellipse-1"></div>
        </div>
        <div className="login">
          <div className="title">
            <h3>Crie a sua conta aqui</h3>
          </div>
          <form action="" method="post" className="submit">
            <div className="name">
              <div className="first-name">
                <div className="row">
                  <label htmlFor="first-name" id="first-name-label">Nome</label>
                </div>
                <input
                  type="text"
                  name="first-name"
                  id="first-name-field"
                  placeholder="Gabriel"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="last-name">
                <div className="row">
                  <label htmlFor="last-name" id="last-name-label">Sobrenome</label>
                </div>
                <input
                  type="text"
                  name="last-name"
                  id="last-name-field"
                  placeholder="Moreira"
                  required
                  autoComplete="cc-name"
                />
              </div>
            </div>
            <div className="user">
              <div className="row">
                <label htmlFor="user" id="user-label">Nome de usuário</label>
              </div>
              <input
                type="text"
                name="user"
                id="user-field"
                placeholder="Xaulin matador de porco"
                required
                autoComplete="username"
              />
            </div>
            <div className="email">
              <div className="row">
                <label htmlFor="email" id="email-label">Email</label>
              </div>
              <input
                type="email"
                name="email"
                id="email-field"
                placeholder="taskflow@gmail.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="password">
              <div className="row">
                <label htmlFor="password">Senha</label>
              </div>
              <input
                type="text"
                name="password"
                id="password-field"
                placeholder="Digite sua senha"
                required
                autoComplete="new-password"
              />
            </div>
            <div className="buttons">
              <button id="create" type="submit">
                Crie sua conta
              </button>
            </div>
            <p id="have-account">Já tem uma conta? <a href="/login">Log in</a></p>
          </form>
          <button id="continue-google">
            <img src={Google} />Continue com o Google
          </button>
        </div>
      </main>
  );
}