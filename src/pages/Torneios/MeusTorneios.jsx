import "./MeusTorneios.css";
import { Link } from "react-router-dom";
import NavBarHome from "../../Components/HomeNavBar/NavBarHome";
import CardTorneio from "../../Components/CardTorneio/CardTorneio";
import torneioInicial from "../../data/torneios";
import ModalCriarTorneio from "../../Components/Torneio/ModalCriarTorneio";
import { useState, useEffect } from "react";

export default function MeusTorneios() {

  const [meusTorneios, setMeusTorneios] = useState([]);

  // Carrega os torneios salvos no localStorage ao abrir a página
  useEffect(() => {
    const local = localStorage.getItem("meusTorneiosRivalix");
    if (local) {
      setMeusTorneios(JSON.parse(local));
    }
  }, []);
  const [modalAberto, setModalAberto] = useState(false);

  // 1) carrega lista geral do localStorage ou do mock
  const [torneios, setTorneios] = useState(() => {
    const local = localStorage.getItem("torneiosRivalix");
    return local ? JSON.parse(local) : torneioInicial;
  });

  // 2) persiste sempre que a lista geral mudar
  useEffect(() => {
    localStorage.setItem("torneiosRivalix", JSON.stringify(torneios));
  }, [torneios]);

  // 3) salva tanto na lista geral quanto em "Meus Torneios"
  const salvarTorneio = (novoTorneio) => {
    // atualiza lista pública (estado + localStorage)
    const listaPublicaAtualizada = [...torneios, novoTorneio];
    setTorneios(listaPublicaAtualizada);
    localStorage.setItem("torneiosRivalix", JSON.stringify(listaPublicaAtualizada));

    // atualiza lista pessoal
    const meus = JSON.parse(localStorage.getItem("meusTorneiosRivalix") || "[]");
    meus.push(novoTorneio);
    localStorage.setItem("meusTorneiosRivalix", JSON.stringify(meus));
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
                    jogo={torneio.jogo}
                  />
                ))
              ) : (
                <p style={{ padding: "1rem", opacity: 0.6 }}>Você ainda não criou nenhum torneio.</p>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* modal */}
      <ModalCriarTorneio
        aberto={modalAberto}
        fechar={() => setModalAberto(false)}
        salvarTorneio={salvarTorneio}
      />
    </>
  );
}