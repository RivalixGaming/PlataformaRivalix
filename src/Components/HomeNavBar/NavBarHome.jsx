import "./style.css";
import logoClaro from '../../assets/logoClaro.png';
import logoDark from '../../assets/logoDark.png';
import iconUser from "../../assets/icon-teste-2.png";
import { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [visivel, setVisivel] = useState(width > 1025);
  const [displaySearch, setDisplaySearch] = useState(width > 1025);

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
              <li><a href="#"><i className="ri-home-2-fill"></i>Início</a></li>
              <li><a href="#"><i className="ri-sword-fill"></i>Torneios</a></li>
              <li><a href="#"><i className="ri-sort-desc"></i>Ranking</a></li>
              <li><a href="#"><i className="ri-team-fill"></i>Feed</a></li>
            </ul>
          </div>

          <div className="container_links espacos_reservados">
            <h2 className="titulo_aside">Espaços Reservados</h2>
            <ul>
              <li><a href="#"><i className="ri-shopping-bag-2-fill"></i>Loja</a></li>
              <li><a href="#"><i className="ri-multi-image-fill"></i>Galeria</a></li>
              <li><a href="#"><i className="ri-gift-fill"></i>Recompensas</a></li>
              <li><a href="#"><i className="ri-notification-3-fill"></i>Notificações</a></li>
              <li><a href="#"><i className="ri-diamond-fill"></i>Planos</a></li>
            </ul>
          </div>

          <div className="container_links faq_ajuda">
            <h2 className="titulo_aside">Ajuda</h2>
            <ul>
              <li><a href="#"><i className="ri-chat-1-fill"></i>FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="fixo_baixo">
          <div className="container_perfil">
            <div className="infos_perfil_home">
              <div className="container_img">
                <img src={iconUser} alt="Foto do usuário" className="foto_usuario" />
              </div>
              <div className="nomes">
                <p>nome</p>
                <p>Nível</p>
              </div>
            </div>
            <div className="config_perfil">
              <a href="#">
                <i className="ri-settings-3-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </aside>

      <section className="nav2">
        <ul>
          <li><a href="#"><i className="ri-home-2-fill"></i>Início</a></li>
          <li><a href="#"><i className="ri-sword-fill"></i>Torneios</a></li>
          <li><a href="#"><i className="ri-sort-desc"></i>Ranking</a></li>
          <li><a href="#"><i className="ri-team-fill"></i>Feed</a></li>
          <li><a href="#"><i className="ri-user-3-fill"></i>Perfil</a></li>
        </ul>
      </section>
    </header>
  );
}