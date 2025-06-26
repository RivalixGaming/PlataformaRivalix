import CardTorneio from "../../Components/CardTorneio/CardTorneio";
import UserRanking from "../../Components/UserRanking/UserRanking";
import NavBar from "../../Components/HomeNavBar/NavBarHome.jsx";
import fotoFliperama from "../../assets/fliperama.png";
import torneio from "../../data/torneios.js";
import "./HomePage.css";
import ModalCriarTorneio from "../../Components/Torneio/ModalCriarTorneio";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Home() {
  const [modalAberto, setModalAberto] = useState(false);
  const [torneios, setTorneios] = useState(() => {
    const local = localStorage.getItem("torneiosRivalix");
    return local ? JSON.parse(local) : torneio;
  });

  const salvarTorneio = (novoTorneio) => {
    const atualizados = [...torneios, novoTorneio];
    setTorneios(atualizados);
    localStorage.setItem("torneiosRivalix", JSON.stringify(atualizados));

    const meusLocal = localStorage.getItem("meusTorneiosRivalix");
    const meusAtualizados = meusLocal
      ? [...JSON.parse(meusLocal), novoTorneio]
      : [novoTorneio];
    localStorage.setItem(
      "meusTorneiosRivalix",
      JSON.stringify(meusAtualizados)
    );
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-content">
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
            <Link to="/ranking">
              <button className="botao_ranking_home">Mostrar Mais</button>
            </Link>
          </div>
        </section>
        <section className="section_dois_home">
          <div className="container_torneios_home">
            <div className="container_info_botao_home_torneios">
              <div className="container_info_torneio_home">
                <h2>Torneios</h2>
                <p>Participe dos torneios e mostre que você é o melhor!</p>
              </div>
              <button onClick={() => setModalAberto(true)}>
                <span>+</span> Crie Torneios
              </button>
            </div>
            <div className="container_cards_torneios_home">
              {torneio.slice(0, 3).map((torneio) => (
                <CardTorneio
                  key={torneio.id}
                  id={torneio.id}
                  titulo={torneio.titulo}
                  foto={torneio.imgTorneio}
                  localizacao={torneio.localizacao}
                  modalidade={torneio.modalidade}
                  tipo={torneio.tipo}
                  data={torneio.data}
                  vagaRestante={torneio.vagasRestantes}
                  vagaTotal={torneio.totalVagas}
                  jogo={torneio.jogo}
                />
              ))}
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
              <Link to="/ranking">
                <button className="botao_ranking_home">Mostrar Mais</button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ModalCriarTorneio
        aberto={modalAberto}
        fechar={() => setModalAberto(false)}
        salvarTorneio={salvarTorneio}
      />
    </>
  );
}
