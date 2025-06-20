import "./Torneios.css";
import { Link } from "react-router-dom";
import imgTorneioUm from "../../assets/torneios/torneio1.png";
import imgTorneioDois from "../../assets/torneios/torneio2.png";
import imgTorneioTres from "../../assets/torneios/MK1.avif";
import NavBarHome from "../../Components/HomeNavBar/NavBarHome";
import CardTorneio from "../../Components/CardTorneio/CardTorneio";

export default function Torenios() {
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

  const torneiosDuplas = [
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
      id: 4,
      titulo: "Coliseu",
      localizacao: "São Paulo",
      modalidade: "Dupla",
      tipo: "Presencial",
      data: "09/07/2025",
      totalVagas: 200,
      vagasRestantes: 50,
      descicao: "O torneio para que os melhores provem seu valor",
      imgTorneio: imgTorneioUm,
    },
    {
      id: 3,
      titulo: "MK1",
      localizacao: "São Paulo",
      modalidade: "Dupla",
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
      <NavBarHome />
      <main className="main-content">
        <div className="container_descubra_torneios">
          <div>
            <h1>Descubra Torneios</h1>
            <p>Participe de torneios dentro da Rivalix</p>
          </div>
          <div>
            <button>
              <span>+</span> Crie Torneios
            </button>
          </div>
        </div>
        <div>
          <div className="rotas_pag_torneios">
            <div className="links_pag_torneios">
              <button className="botao_torneio_explorar"
              style={{borderBottom:"2px solid #ff6a00"}}
              >Explorar</button>
              <Link to="/meus-torneios">
                <button className="botao_torneio_meus_torneios"> Meus Torneios</button>
              </Link>
            </div>
            <div>
              <button href="#">
                <i class="ri-filter-3-line"></i> Filtros
              </button>
            </div>
          </div>
          <div className="linha_pag_torneio"></div>
          <div className="container_cards_pag_torneio">
            <h2>Populares</h2>
            <div className="container_torneios_pag_torneio">
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

            <h2>Em Dupla</h2>
            <div className="container_torneios_pag_torneio">
              {torneiosDuplas.map((torneio) => (
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
        </div>
      </main>
    </>
  );
}
