import logo from "../assets/logo.png";
import { Button } from "./button";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="Logo" />
          <ul>
            <li>
              <a href="#principal" className="nav-link">
                Principal
              </a>
            </li>
            <li>
              <a href="#conheca-nos" className="nav-link">
                Conheça-nos
              </a>
            </li>
            <li>
              <a href="#instalacoes" className="nav-link">
                Instalações
              </a>
            </li>
            <li>
              <a href="#avaliacoes" className="nav-link">
                Avaliações
              </a>
            </li>
            <li>
              <a href="#contato" className="nav-link">
                Contato
              </a>
            </li>
          </ul>
          <a href="/login" className="loggin-btn">
            <button>Login</button>
          </a>
          <Button
            id="toggle-btn"
            text={<img src="/icone-tema.png" alt="Mudar tema" />}
          />
        </nav>
      </header>
    </div>
  );
};
