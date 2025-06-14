import React, { useContext } from 'react';
import './Footer.css';

import logoClaro from '../../assets/logoClaro.png';
import logoDark from '../../assets/logoDark.png';

import instagramIcon from '../../assets/icon/instagram.svg';
import githubIcon from '../../assets/icon/mdi--github.svg';
import twitterIcon from '../../assets/icon/prime--twitter (1).svg';

import { ThemeContext } from '../../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const logo = theme === 'dark' ? logoDark : logoClaro;

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footerLogo">
          <img src={logo} alt="Logo Rivalix" />
          <p>
            <strong>Conectando Campeões</strong>
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/rivalix.oficial" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://github.com/orgs/RivalixGaming/people" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://x.com/OficialRivalix" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="X (Twitter)" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <ul>
            <li><strong>Rivalix</strong></li>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#Eventos">FAQ</a></li>
            <li><a href="#Loja">Loja</a></li>
            <li><a href="#Sobre Nós">Sobre Nós</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <ul>
            <li><strong>Contato</strong></li>
            <li><a href="#">rivalix.oficial@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 Rivalix. Todos os direitos reservados</p>
        <ul className="footer-policy">
          <li><a href="#">Políticas e Termos</a></li>
          <li><a href="#">Privacidade e Segurança</a></li>
          <li><a href="#">Mapa do Site</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;