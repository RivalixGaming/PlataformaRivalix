import "./style.css";
import logoClaro from '../../assets/logoClaro.png';
import logoDark from "../../assets/logoDark.png";
import iconUser from '/src/assets/icon-teste-2.png';
import { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useProfile } from "../../contexts/ProfileContext";
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [visivel, setVisivel] = useState(width > 1025);
  const [displaySearch, setDisplaySearch] = useState(width > 1025);
  const { fotoPerfil } = useProfile();

  const { theme, setTheme } = useTheme(); // correto para seu contexto

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      if (newWidth > 1025) {
        setVisivel(true);
        setDisplaySearch(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function searchVisivel() {
    if (width < 1025) setDisplaySearch(!displaySearch);
  }

  function asideVisivel() {
    if (width < 1025) setVisivel(!visivel);
  }

  return (
    <header className="header_content">
      <nav className="container_header">
        <div className="logo_rivalix">
          <img
            key={theme}
            src={theme === 'dark' ? logoDark : logoClaro}
            alt="Logo Rivalix"
            width="200px"
          />
        </div>

        <div className={`search ${width > 1024 || displaySearch ? "visivel" : "escondido"}`}>
          <input type="text" placeholder="Pesquisar..." />
        </div>

        <div className="container_icons">
          <div>
            <a href="#">
              <i className="ri-gift-fill"></i>
            </a>
          </div>
          <div>
            <a href="#">
              <i className="ri-coins-fill"></i>
            </a>
          </div>
        </div>

        <div className="menu_hamburger">
          <button onClick={searchVisivel}>
            <i className="ri-search-line"></i>
          </button>
          <button onClick={asideVisivel}>
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </nav>

      <aside style={{ display: width > 1024 || visivel ? "flex" : "none" }}>
       <div className="fixo_cima">
      <div className="container_links links_Navegacao">
        <h2 className="titulo_aside">Navegações</h2>
        <ul>
          <li>
            <Link to="/home">
              <i className="ri-home-2-fill"></i>Início
            </Link>
          </li>
          <li>
            <Link to="/torneios">
              <i className="ri-sword-fill"></i>Torneios
            </Link>
          </li>
          <li>
            <Link to="/ranking">
              <i className="ri-sort-desc"></i>Ranking
            </Link>
          </li>
          <li>
            <Link to="/feed">
              <i className="ri-team-fill"></i>Feed
            </Link>
          </li>
        </ul>
      </div>

      <div className="container_links espacos_reservados">
        <h2 className="titulo_aside">Espaços Reservados</h2>
        <ul>
          <li>
            <Link to="/loja">
              <i className="ri-shopping-bag-2-fill"></i>Loja
            </Link>
          </li>
          <li>
            <Link to="/galeria">
              <i className="ri-multi-image-fill"></i>Galeria
            </Link>
          </li>
          <li>
            <Link to="/recompensas">
              <i className="ri-gift-fill"></i>Recompensas
            </Link>
          </li>
          <li>
            <Link to="/notificacoes">
              <i className="ri-notification-3-fill"></i>Notificações
            </Link>
          </li>
          <li>
            <Link to="/planos">
              <i className="ri-diamond-fill"></i>Planos
            </Link>
          </li>
          <li>
            <Link to="/configuracoes">
              <i className="ri-settings-3-fill"></i>Configurações
            </Link>
          </li>
        </ul>
      </div>

  <div className="container_links faq_ajuda">
    <h2 className="titulo_aside">Ajuda</h2>
    <ul>
      <li>
        <Link to="/faq">
          <i className="ri-chat-1-fill"></i>FAQ
        </Link>
      </li>
    </ul>
  </div>
</div>

        <div className="fixo_baixo">
          <div className="container_perfil">
            <div className="infos_perfil_home">
              <div className="container_img">
                <img src={fotoPerfil || iconUser} alt="Foto do usuário" className="foto_usuario" />
              </div>
              <div className="nomes">
                <div className="nomes">
                  <Link to="/perfil" className="nome-link">nome</Link>
                  <p>Nível</p>
                </div>
              </div>
            </div>
            <div className="config_perfil">
              <Link to="/configuracoes" className="config_link">
                <i className="ri-settings-3-fill"></i>
              </Link>
            </div>
          </div>
        </div>
      </aside>

      <section className="nav2">
        <ul>
          <li><Link to="/home"><i className="ri-home-2-fill"></i>Início</Link></li>
          <li><Link to="/torneios"><i className="ri-sword-fill"></i>Torneios</Link></li>
          <li> <Link to="/ranking"><i className="ri-sort-desc"></i>Ranking</Link></li>
          <li> <Link to="/feed"><i className="ri-team-fill"></i>Feed</Link></li>
          <li> <Link to="/perfil"><i className="ri-user-3-fill"></i>Perfil</Link></li>
        </ul>
      </section>
    </header>
  );
}