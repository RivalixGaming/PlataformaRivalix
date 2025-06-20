import "./Torneios.css";
import { Link } from "react-router-dom";
import NavBarHome from "../../Components/HomeNavBar/NavBarHome";
import CardTorneio from "../../Components/CardTorneio/CardTorneio";
import torneio from "../../data/torneios"

export default function Torenios() {

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
            <Link to="/criacao-torneio">
                <button>
                <span>+</span> Crie Torneios
                </button>
            </Link>
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
                  vagaTotal={torneio.totalVagas}
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
