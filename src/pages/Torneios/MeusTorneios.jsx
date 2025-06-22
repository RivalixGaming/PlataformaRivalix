import "./MeusTorneios.css";
import { Link } from "react-router-dom";
import NavBarHome from "../../Components/HomeNavBar/NavBarHome";
import CardTorneio from "../../Components/CardTorneio/CardTorneio";
import ModalCriarTorneio from "../../Components/Torneio/ModalCriarTorneio";
import { useState, useEffect } from "react";

export default function MeusTorneios() {
  const [modalAberto, setModalAberto] = useState(false);
  const [meusTorneios, setMeusTorneios] = useState([]);

  // Carrega os torneios salvos no localStorage ao abrir a página
  useEffect(() => {
    const local = localStorage.getItem("meusTorneiosRivalix");
    if (local) {
      setMeusTorneios(JSON.parse(local));
    }
  }, []);

  // Salva o novo torneio no estado e no localStorage
  const adicionarTorneio = (novoTorneio) => {
    const atualizado = [...meusTorneios, novoTorneio];
    setMeusTorneios(atualizado);
    localStorage.setItem("meusTorneiosRivalix", JSON.stringify(atualizado));
  };

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
            <button onClick={() => setModalAberto(true)}>
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
              style={{ borderBottom: "2px solid #ff6a00" }}>
                Meus Torneios
              </button>
            </div>
            <div className="filtro_torneios">
              <button>
                <i className="ri-filter-3-line"></i> Filtros
              </button>
            </div>
          </div>

          <div className="linha_pag_torneio"></div>

          <div className="container_cards_pag_torneio">
            <h2>Meus Torneios</h2>
            <div className="container_torneios_pag_torneio">
              {meusTorneios.length > 0 ? (
                meusTorneios.map((torneio) => (
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
                    descricao={torneio.descricao}
                  />
                ))
              ) : (
                <p style={{ padding: "1rem", opacity: 0.6 }}>Você ainda não criou nenhum torneio.</p>
              )}
            </div>
          </div>
        </div>
      </main>

      <ModalCriarTorneio
        aberto={modalAberto}
        fechar={() => setModalAberto(false)}
        salvarTorneio={adicionarTorneio}
      />
    </>
  );
}