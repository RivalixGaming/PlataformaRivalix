import { useContext, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { ThemeContext } from '../../contexts/ThemeContext';
import videoSrc from '../../assets/opcaoVideo1.mp4';
import ondaLight from '../../assets/onda.png';
import ondaDark from '../../assets/onda-dark.png';
import sfImg from '../../assets/SF.jpeg';
import brawlhallaImg from '../../assets/brawlhalla.jpg';
import tekkenImg from '../../assets/Tekken8.jpg';
import mkImg from '../../assets/MK1.avif';
import torneioImg from '../../assets/participeTorneios.png';
import arenaImg from '../../assets/torneio-esports.png';
import comunidadeImg from '../../assets/community_x_transparent.png';
import perfilImg from '../../assets/personalizePerfil.png';
import GuiltyGear from '../../assets/GuiltyGear.png';
import granblue from '../../assets/granblue.png';
import fatalfury from '../../assets/fatalfury.png';

import controleIcon from '../../assets/icon/controle.svg';
import calendarioIcon from '../../assets/icon/calendario.svg';
import conversaIcon from '../../assets/icon/balãoConversa.svg';
import pessoaIcon from '../../assets/icon/pessoa.svg';

import fliperama3dImg from '../../assets/fliperama3d.png'

import torneio1 from '../../assets/torneio1.png';
import torneio2 from '../../assets/torneio2.png';
import localIcon from '../../assets/icon/local.svg';

import miraIcon from '../../assets/icon/mira.svg';
import rankingIcon from '../../assets/icon/ranking.svg';
import pessoasIcon from '../../assets/icon/pessoas.svg';
import fliperamaImg from '../../assets/fliperama.png';

import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const ondas = document.querySelectorAll('.onda');
    ondas.forEach(onda => {
      const img = theme === 'dark' ? ondaDark : ondaLight;
      onda.style.backgroundImage = `url(${img})`;
    });
  }, [theme]);

  // Carrossel
   const jogos = [
    { img: sfImg, alt: 'Street Fighter 6' },
    { img: brawlhallaImg, alt: 'Brawlhalla' },
    { img: tekkenImg, alt: 'Tekken 8' },
    { img: mkImg, alt: 'Mortal Kombat 1' },
    { img: GuiltyGear, alt: 'Guilty Gear'},
    { img: granblue, alt: 'Granblue fantasy versus rising'},
    { img: fatalfury, alt: 'Fatal Fury'}
  ];

  useEffect(() => {
    const wrapper = document.querySelector('.carrossel-wrapper');
    if (wrapper) {
      const copy = wrapper.cloneNode(true);
      document.querySelector('.carrossel').appendChild(copy);
    }
  }, []);

  // Funcionalidades
  useEffect(() => {
    const blocks = document.querySelectorAll('.text-block');
    const images = document.querySelectorAll('.left-column img');

    const onScroll = () => {
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;

      blocks.forEach((block, index) => {
        const rect = block.getBoundingClientRect();
        const blockCenter = rect.top + rect.height / 2;
        const isVisible = Math.abs(blockCenter - centerY) < rect.height / 2;

        if (isVisible) {
          blocks.forEach(b => b.classList.remove('visivel'));
          images.forEach(img => {
            img.classList.remove('ativa');
            img.setAttribute('aria-hidden', 'true');
          });

          blocks[index].classList.add('visivel');
          if (images[index]) {
            images[index].classList.add('ativa');
            images[index].setAttribute('aria-hidden', 'false');
          }
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  //Scroll Reveal

  useEffect(() => {
    ScrollReveal().reveal('.selo-about', {
      origin: 'top',
      distance: '30px',
      duration: 800,
      delay: 200,
      easing: 'ease-out',
      reset: false,
    });

    //Apresentação
    ScrollReveal().reveal('.text-about', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 400,
      easing: 'ease-out',
      reset: false,
    });

    //Titulo Carrossel
    ScrollReveal().reveal('.title-games', {
      origin: 'top',
      distance: '30px',
      duration: 800,
      delay: 100,
      easing: 'ease-out',
      reset: false
    });

    // Carrossel
    ScrollReveal().reveal('.carrossel-container2', {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      delay: 300,
      easing: 'ease-out',
      reset: false
    });

    // Título "Explore Funcionalidades"
    ScrollReveal().reveal('.title-features', {
      origin: 'top',
      distance: '30px',
      duration: 800,
      delay: 100,
      easing: 'ease-out',
      reset: false
    });

    // Coluna Esquerda (imagens principais)
    ScrollReveal().reveal('.left-column', {
        opacity: 0,
        duration: 1000,
        delay: 300,
        easing: 'ease-out',
        reset: false
    });

    // Selo "Se é pra elevar o jogo, é com a Rivalix."
ScrollReveal().reveal('.selo-more', {
    origin: 'top',
    distance: '30px',
    duration: 800,
    delay: 100,
    easing: 'ease-out',
    reset: false
  });

  // Primeiro parágrafo
  ScrollReveal().reveal('.content-more p:nth-of-type(1)', {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      delay: 500,
      easing: 'ease-out',
      reset: false
  });
    
  // Segundo parágrafo
  ScrollReveal().reveal('.content-more p:nth-of-type(2)', {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      delay: 700,
      easing: 'ease-out',
      reset: false
  });

  // Botão "Saiba Mais"
  ScrollReveal().reveal('.btn-effect', {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      delay: 900,
      easing: 'ease-out',
      reset: false
  });

  // Título "Torneios em Alta"
  ScrollReveal().reveal('.tournaments-title-effect', {
    origin: 'top',
    distance: '30px',
    duration: 800,
    delay: 100,
    easing: 'ease-out',
    reset: false
  });

  // Primeiro Card de Torneio (Torneio dos Titãs)
  ScrollReveal().reveal('.tournament-card:nth-child(1)', {
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 300,
    easing: 'ease-out',
    reset: false
  });
  
  // Segundo Card de Torneio (Torneio do Coliseu)
  ScrollReveal().reveal('.tournament-card:nth-child(2)', {
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 500,
    easing: 'ease-out',
    reset: false
  });

  // Título "Prepare-se Para o Topo!"
  ScrollReveal().reveal('.features-title', {
      origin: 'top',
      distance: '30px',
      duration: 800,
      delay: 100,
      easing: 'ease-out',
      reset: false
  });

  ScrollReveal().reveal('.feature-card-effect:nth-child(1)', {
      origin: 'bottom',
      distance: '30px',
      duration: 800,
      delay: 300,
      easing: 'ease-out',
      reset: false
  });
    
  // Terceiro card (Participe da Comunidade - direita)
  ScrollReveal().reveal('.feature-card-effect:nth-child(3)', {
      origin: 'bottom',
      distance: '30px',
      duration: 800,
      delay: 400,
      easing: 'ease-out',
      reset: false
  });
    
  // Segundo card (Compita por Treino - meio, mais abaixo)
  ScrollReveal().reveal('.feature-card-effect:nth-child(2)', {
      origin: 'bottom',
      distance: '30px',
      duration: 800,
      delay: 600,
      easing: 'ease-out',
      reset: false
  });

  // Texto do CTA (Título + Parágrafo)
  ScrollReveal().reveal('.cta-text', {
      origin: 'left',
      distance: '40px',
      duration: 1000,
      delay: 100,
      easing: 'ease-out',
      reset: false
  });
}, []);

  return (
    <main className='Inicio'>
      <section className="hero">
        <div className="video-background">
          <video autoPlay muted loop playsInline>
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="content">
            <h1>
              Elevando a <span>Competição</span> do Seu Game ao Próximo <span>Nível</span>
            </h1>
          </div>
        </div>

        <section className="ondas-box" aria-hidden="true">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="onda"
              id={`onda${n}`}
              data-img-light={ondaLight}
              data-img-dark={ondaDark}
            ></div>
          ))}
        </section>
      </section>

      <section className="about-container" aria-labelledby="titulo-apresentacao">
      <div className="about-landing">
        <div className="text">
          <div className="title-decoration selo-about">
            <h2 id="titulo-apresentacao" className="title">Nós Somos a Rivalix</h2>
          </div>
          <p className="text-about">
            Transforme cada partida em um grande evento! Conecte-se, compita e conquiste seu espaço no cenário gamer.
          </p>
        </div>
      </div>
    </section>

      <section className="carrossel-container">
        <h2 className="title-games">Jogos Incluídos</h2>
        <div className="carrossel carrossel-container2">
          {[1, 2].map((_, i) => (
            <div className="carrossel-wrapper" key={i}>
              {jogos.map((jogo, index) => (
                <div className="card" key={index}>
                  <img src={jogo.img} alt={jogo.alt} />
                  <Link to="/login" className="play-btn" role="button">Jogue Agora</Link>
                </div>
              ))}
            </div>
          ))}
        </div>
    </section>

    <div className="barras-decorativas" aria-hidden="true">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <section className="features" aria-labelledby="titulo-features">
        <div className="title-features">
          <h2 id="titulo-features">Explore Funcionalidades</h2>
        </div>

        <div className="topic-features">
          <div className="left-column left-column2">
            {[torneioImg, arenaImg, comunidadeImg, perfilImg].map((src, i) => (
              <img key={i} src={src} alt={`Imagem ${i + 1}`} data-index={i + 1} />
            ))}
          </div>

          <div className="right-column">
            <article className="text-block">
              <div className="icon-features">
                <img src={controleIcon} className="icon" alt="Controle" />
                <h3>Participe de Torneios</h3>
              </div>
              <p>Entre em competições emocionantes de eSports com jogadores de todo o Brasil.</p>
            </article>

            <article className="text-block">
              <div className="icon-features">
                <img src={calendarioIcon} className="icon" alt="Calendário" />
                <h3>Organize Eventos</h3>
              </div>
              <p>Crie e gerencie seus próprios campeonatos ou encontros da comunidade.</p>
            </article>

            <article className="text-block">
              <div className="icon-features">
                <img src={conversaIcon} className="icon" alt="Conversa" />
                <h3>Interaja com a Comunidade</h3>
              </div>
              <p>Conecte-se com outros gamers através de fóruns, chats e grupos temáticos.</p>
            </article>

            <article className="text-block">
              <div className="icon-features">
                <img src={pessoaIcon} className="icon" alt="Pessoa" />
                <h3>Personalize o seu Perfil</h3>
              </div>
              <p>Adicione sua foto, conquistas e jogos favoritos ao seu perfil.</p>
            </article>
          </div>
        </div>
      </section>

      <div className="barras-decorativas2" aria-hidden="true">
        <div className="line4"></div>
        <div className="line5"></div>
        <div className="line6"></div>
      </div>

      <section
        className="more"
        aria-labelledby="titulo-more"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${fliperama3dImg})`,
        }}
      >
        <div className="content-more">
          <div className="title-more selo-more">
            <h2 id="titulo-more">Se é pra elevar o jogo, é com a Rivalix.</h2>
          </div>

          <p>
            Mais que uma plataforma. Somos o palco onde o jogo vira espetáculo, e
            cada jogador escreve sua própria história.
          </p>

          <p>
            Criada por quem vive o game. Conectamos torneios, comunidade e
            conteúdo em uma experiência feita pra você dominar.
          </p>

          <div className="button-more btn-effect">
            <Link to="/sobre" className="btn-more" role="button">
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      <div className="barras-decorativas3">
        <div className="line7"></div>
        <div className="line8"></div>
        <div className="line9"></div>
      </div>

      <section className="tournaments">
        <div className="eclipse-wrapper">
          <div className="eclipse eclipse-1"></div>
          <div className="eclipse eclipse-2"></div>
          <div className="eclipse eclipse-3"></div>
        </div>

        <div className="tournaments-container">
          <h5 className="tournaments-title tournaments-title-effect">Torneios em Alta</h5>

          <div className="tournaments-row">
            {/* Card 1 */}
            <div className="tournament-card tournament-card-effect">
              <img src={torneio2} alt="Torneio dos Titãs com personagens de Mortal Kombat" />
              <div className="info-tournament">
                <h5>Torneio dos Titãs</h5>
                <p className="location">
                  <span className="icon-location" aria-hidden="true">
                    <img src={localIcon} alt="" />
                  </span>
                  São Paulo
                </p>

                <div className="badges">
                  <span className="badge solo">Solo</span>
                  <span className="badge presencial">Presencial</span>
                  <span className="badge date">09/07/2025</span>
                </div>

                <p className="players-count">5 vagas restantes</p>

                <div className="progress">
                  <div className="progress-bar" style={{ width: '85%' }}></div>
                </div>

                <p className="description">Evento presencial voltado para jogadores de alto desempenho.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="tournament-card tournament-card-effect">
              <img src={torneio1} alt="Coliseu com personagens de Street Fighter" />
              <div className="info-tournament">
                <h5>Torneio do Coliseu</h5>
                <p className="location">
                  <span className="icon-location" aria-hidden="true">
                    <img src={localIcon} alt="" />
                  </span>
                  Online
                </p>

                <div className="badges">
                  <span className="badge solo">Solo</span>
                  <span className="badge presencial">Presencial</span>
                  <span className="badge date">10/10/2025</span>
                </div>

                <p className="players-count">32 vagas restantes</p>

                <div className="progress">
                  <div className="progress-bar" style={{ width: '45%' }}></div>
                </div>

                <p className="description">Evento online voltado para jogadores amadores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-section" id="informacaos">
        <h6 className="features-title features-title-effect">
          Prepare-se Para o <span className="highlight">Topo!</span>
        </h6>

        <div className="features-grid">
          <div className="feature-card feature-card-effect">
            <img src={miraIcon} alt="Ícone de mira" className="feature-icon" />
            <p>
              Partidas<br />Competitivas
            </p>
          </div>

          <div className="feature-card feature-card-effect">
            <img src={rankingIcon} alt="Ícone de ranking com estrelas" className="feature-icon" />
            <p>
              Compita por Treino<br />ou Premiações
            </p>
          </div>

          <div className="feature-card feature-card-effect">
            <img src={pessoasIcon} alt="Ícone de comunidade" className="feature-icon" />
            <p>
              Participe da<br />Comunidade
            </p>
          </div>
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-titulo">
        <div className="cta-container">
          <div className="cta-texto cta-text">
            <h6>Pronto para transformar o seu jogo?</h6>
            <p>
              Conecte-se com jogadores, participe de torneios e suba de nível em uma plataforma feita pra quem leva o competitivo a sério.
            </p>
          </div>
          <div className="cta-imagem">
            <img src={fliperamaImg} alt="Fliperama Neon" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
