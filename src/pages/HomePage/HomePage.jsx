import CardTorneio from "../../Components/CardTorneio/CardTorneio";
import UserRanking from "../../Components/UserRanking/UserRanking";
import NavBar from "../../Components/HomeNavBar/NavBarHome.jsx";
import fotoFliperama from "../../assets/fliperama.png";
import "./HomePage.css";

import imgTorneioUm from "../../assets/torneios/torneio1.png"
import imgTorneioDois from "../../assets/torneios/torneio2.png"
import imgTorneioTres from "../../assets/torneios/MK1.avif"

export default function Home() {
  const torneio = [
    {
      id: 1,
      titulo: "Coliseu",
      localizacao: "São Paulo",
      modalidade: "Solo",
      tipo: "Presencial",
      data: "09/07/2025",
      totalVagas: 200,
      vagasRestantes: 50,
      descicao: "O torneio para que os melhores provem seu valor",
      imgTorneio: imgTorneioUm,
    },
    {
      id: 2,
      titulo: "Torneio de Titãs",
      localizacao: "São Paulo",
      modalidade: "Dupla",
      tipo: "Online",
      data: "12/09/2025",
      totalVagas: 200,
      vagasRestantes: 33,
      descicao: "Torneio em dupla",
      imgTorneio: imgTorneioDois,
    },
    {
      id: 3,
      titulo: "MK1",
      localizacao: "São Paulo",
      modalidade: "Solo",
      tipo: "Online",
      data: "04/08/2025",
      totalVagas: 200,
      vagasRestantes: 43,
      descicao: "Torneio para os amantes de Mortal Kombat",
      imgTorneio: imgTorneioTres,
    },
  ];

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
              {torneio.map((torneio) => (
                <CardTorneio
                  key={torneio.id}
                  titulo={torneio.titulo}
                  foto={torneio.imgTorneio}
                  localizacao={torneio.localizacao}
                  modalidade={torneio.modalidade}
                  tipo={torneio.tipo}
                  data={torneio.data}
                  vagaRestante={torneio.vagasRestantes}
                  descricao={torneio.descicao}
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
              <button className="botao_ranking_home">Mostrar Mais</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
