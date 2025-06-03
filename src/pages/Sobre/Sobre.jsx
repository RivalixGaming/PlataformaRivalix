import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx"
import './Sobre.css';
import Team from '../../Components/Team/Team.jsx';
import teamImage from "../../assets/imagemBastidores.png";
import ScrollReveal from 'scrollreveal';
import {useEffect} from "react";



const Sobre = () => {
  useEffect(() => {
    ScrollReveal().reveal(".about-page__title", {
      origin: "left",
      distance: "50px",
      duration: 800,
      easing: "ease-out",
      opacity: 0,
    });

    ScrollReveal().reveal(".about-page__description", {
      origin: "bottom",
      distance: "30px",
      duration: 800,
      delay: 200,
      opacity: 0, 
    });

    ScrollReveal().reveal(".about-page__slogan", {
      scale: 0.9,
      duration: 900,
      delay: 400,
      opacity: 0,
      easing: "ease-out",
    });

    ScrollReveal().reveal(".about-page__team-text", {
      origin: "left",
      distance: "40px",
      duration: 700,
      delay: 300,
      opacity: 0,
    });

    ScrollReveal().reveal(".about-page__team-image", {
      origin: "right",
      distance: "60px",
      duration: 700,
      delay: 400,
      opacity: 0,
    });

    ScrollReveal().reveal(".team-card", {
      interval: 120,
      origin: "bottom",
      distance: "40px",
      duration: 600,
      easing: "ease-in-out",
      opacity: 0,
      reset: false,
    });

    ScrollReveal().reveal(".team-title", {
      origin: "bottom",
      distance: "30px",
      duration: 500,
      easing: "ease-in-out",
      opacity: 0,
    });
   
  }, []);

  return (
    <>
        <Navbar />
        <main className="about-page">
          <section className="about-page__intro">
            <h1 className="about-page__title">
                    Somos a <strong className="about-page__highlight">RIVALIX</strong>
            </h1>
            <p className="about-page__description">
              Uma plataforma de e-sports criada para facilitar a conexão entre jogadores e organizações.
              Torneios, comunicação e experiências mais intuitivas e fluidas — tudo em um só lugar.
            </p>
          </section>
        
          <section className="about-page__slogan-container">
            <hr className="about-page__line" />
            <h2 className="about-page__slogan">
                Criada por jogadores. Movida por paixão. Feita pra comunidade.
            </h2>
            <hr className="about-page__line" />
          </section>
        
          <section className="about-page__team">
            <p className="about-page__team-text">
              Por trás da <strong className="about-page__highlight--orange">Rivalix</strong> existe
              um time que vive o competitivo como você.
            </p>
        
            <div className="about-page__team-container">
              <img src={teamImage} alt="Equipe Rivalix reunida" className="about-page__team-image"/>
                <p className="about-page__team-text">
                  "Não é força, mas a constância de um propósito que faz grandes equipes."
                </p>
            </div>
          </section>
        
          <hr className="about-page__divider--mobile" />
          <Team />
        </main>
        <Footer />    
    </>

  );
};

export default Sobre;