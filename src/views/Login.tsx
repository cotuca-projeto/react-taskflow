import Logo from "./logo.svg"
import Google from "./google.svg"
import '../style/login.css'

export default function () {
    return <>
        <div className="logo">
            <p>TaskFlow</p>
            <img src={Logo} alt="Logo-TaskFlow" />
        </div>
        <div className="ellipse" id="ellipse-2"></div>
        <main>
            <div className="login">
                <div className="title">
                    {/* <!-- <p>Welcome Back</p> --> */}
                    <h3>Entre em sua conta</h3>
                </div>
                <form action="" method="post" className="submit">
                    <div className="email">
                        <div className="row">
                            <label htmlFor="email" id="email-label">Email</label>
                        </div>
                        <input type="email" name="email" id="email-field" placeholder="taskflow@gmail.com" required
                            autoComplete="email" />
                    </div>
                    <div className="password">
                        <div className="row">
                            <label htmlFor="password">Senha</label>
                            <a href="#" id="forget">Esqueceu sua senha?</a>
                        </div>
                        <input type="text" name="password" id="password-field" placeholder="Digite sua senha" required
                            autoComplete="new-password" />
                    </div>
                    <div className="buttons">
                        <button id="create" type="submit">
                            Entrar
                        </button>
                    </div>
                    <p id="have-account">Não tem uma conta? <a href="/register">Registre-se</a></p>
                </form>
                <button id="continue-google">
                    <img src={Google} />Continue com o Google
                </button>
            </div>
        </main>
        <div className="ellipse" id="ellipse-1"></div>
    </>
}