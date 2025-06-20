import "./MeusTorneios.css";
import imgTorneioUm from "../../assets/torneios/torneio1.png";
import { Link } from "react-router-dom";
import NavBarHome from "../../Components/HomeNavBar/NavBarHome";
import CardTorneio from "../../Components/CardTorneio/CardTorneio";

export default function MeusTorneios() {
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
    }
  ];

  return (
    <>
      <NavBarHome />
      <main className="main-content">
        <div className="container_descubra_torneios">
          <div>
            <h1>Meus Torneios</h1>
            <p>Movimente ainda mais a comunidade através de torneios</p>
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
                <Link to="/torneios">
                    <button className="botao_torneio_explorar">Explorar</button>
                </Link>
                <button className="botao_torneio_meus_torneios"
                style={{borderBottom:"2px solid #ff6a00"}}> Meus Torneios</button>
            </div>
            <div>
              <button href="#">
                <i class="ri-filter-3-line"></i> Filtros
              </button>
            </div>
          </div>
          <div className="linha_pag_torneio"></div>
          <div className="container_cards_pag_torneio">
            <h2>Meus Torneios</h2>
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
          </div>
        </div>
      </main>
    </>
  );
}
