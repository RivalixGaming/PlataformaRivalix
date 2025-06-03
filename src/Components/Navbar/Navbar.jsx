import React, { useState, useContext } from 'react';
import './Navbar.css';
import logoClaro from '../../assets/logoClaro.png';
import logoDark from '../../assets/logoDark.png';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const isDark = theme === 'dark';
  const logo = isDark ? logoDark : logoClaro;

  return (
    <header>
      <nav className="navbar" aria-label="Menu principal">
        <div className="logo">
          <img id="logo-img" src={logo} alt="Logo da Rivalix" />
        </div>

        <button
          id="hamburger"
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Abrir ou fechar menu de navegação"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-center" role="navigation" aria-label="Links de navegação">
          <ul className="nav-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
          </ul>
        </div>

        <div className="nav-right">
          <label className="switch">
            <input
              type="checkbox"
              id="toggle-dark"
              checked={isDark}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
          <Link to="/login" className="login-btn">Entrar</Link>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`} role="navigation">
          <ul className="mobile-links">
            <li><a href="#inicio">Início</a></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li>
              <label className="switch">
                <input
                  type="checkbox"
                  id="toggle-dark-mobile"
                  checked={isDark}
                  onChange={handleToggle}
                />
                <span className="slider"></span>
              </label>
            </li>
            <li><Link to="/login" className="login-btn">Entrar</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;