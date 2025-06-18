import './About.css';
import teamImage from "../../assets/imagemBastidores.png";

const About = () => {
  return (
    <>
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
            <img
              src={teamImage}
              alt="Equipe Rivalix reunida"
              className="about-page__team-image"
            />
            <p className="about-page__team-text">
              "Não é força, mas a constância de um propósito que faz grandes equipes."
            </p>
          </div>
        </section>

        <hr className="about-page__divider--mobile" />
      </main>
    </>
  );
};

export default About;