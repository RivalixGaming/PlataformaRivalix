import CardTorneio from "../../Components/CardTorneio/CardTorneio";
import UserRanking from "../../Components/UserRanking/UserRanking";
import NavBar from "../../Components/HomeNavBar/NavBarHome.jsx";
import fotoFliperama from "../../assets/fliperama.png";
import "./HomePage.css";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="section_um_home">
          <div className="container_carrossel_home">
            <div className="container_infos_carrossel_home">
              <h2>
                Participe da Comunidade<br></br>RIVALIX no Discord
              </h2>
              <button>Entrar Agora</button>
            </div>
            <img className="imagem_fliperama_home" src={fotoFliperama} alt="" />
          </div>
          <div className="container_ranking_home">
            <div className="descricao_ranking_home">
              <h2>Ranking</h2>
              <p>Cada posição aqui carrega história, não estatística.</p>
            </div>
            <div className="container-jogadores-ranking-home">
              <UserRanking />
              <UserRanking />
            </div>
            <button className="botao_ranking_home">Mostrar Mais</button>
          </div>
        </section>
        <section className="section_dois_home">
          <div className="container_torneios_home">
            <div className="container_info_botao_home_torneios">
              <div className="container_info_torneio_home">
                <h2>Torneios</h2>
                <p>Participe dos torneios e mostre que você é o melhor!</p>
              </div>
              <button>Criar Torneio</button>
            </div>
            <div className="container_cards_torneios_home">
              <CardTorneio />
              <CardTorneio />
              <CardTorneio />
            </div>
          </div>
          <div className="rankin_home_dois">
            <div className="container_ranking_home_dois">
              <div className="descricao_ranking_home">
                <h2>Ranking</h2>
                <p>Cada posição aqui carrega história, não estatística.</p>
              </div>
              <div className="container-jogadores-ranking-home">
                <UserRanking />
                <UserRanking />
              </div>
              <button className="botao_ranking_home">Mostrar Main</button>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}