import "./Torneios.css";
import { Link } from "react-router-dom";
import NavBarHome from "../../Components/HomeNavBar/NavBarHome";
import CardTorneio from "../../Components/CardTorneio/CardTorneio";
import torneioInicial from "../../data/torneios";
import ModalCriarTorneio from '../../Components/Torneio/ModalCriarTorneio';
import React, { useState, useEffect } from "react";

export default function Torneios() {
  const [modalAberto, setModalAberto] = useState(false);

  // Carrega torneios da lista geral ou do localStorage
  const [torneios, setTorneios] = useState(() => {
    const local = localStorage.getItem("torneiosRivalix");
    return local ? JSON.parse(local) : torneioInicial;
  });

  // salva no localStorage
  useEffect(() => {
    localStorage.setItem("torneiosRivalix", JSON.stringify(torneios));
  }, [torneios]);

  // Salva o torneio tanto nos torneios gerais quanto em "meus torneios"
  const salvarTorneio = (novoTorneio) => {
    // Atualiza torneios públicos (explorar)
    setTorneios([...torneios, novoTorneio]);

    // Também salva nos meus torneios
    const meusTorneiosLocal = localStorage.getItem("meusTorneiosRivalix");
    const meusTorneiosAtualizados = meusTorneiosLocal
      ? [...JSON.parse(meusTorneiosLocal), novoTorneio]
      : [novoTorneio];

    localStorage.setItem("meusTorneiosRivalix", JSON.stringify(meusTorneiosAtualizados));
  };


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
            <button onClick={() => setModalAberto(true)}>
              <span>+</span> Crie Torneios
            </button>
          </div>
        </div>

        <div>
          <div className="rotas_pag_torneios">
            <div className="links_pag_torneios">
              <button className="botao_torneio_explorar" style={{ borderBottom: "2px solid #ff6a00" }}>
                Explorar
              </button>
              <Link to="/meus-torneios">
                <button className="botao_torneio_meus_torneios">Meus Torneios</button>
              </Link>
            </div>
            <div className="filtro_torneios">
              <button >
                <i className="ri-filter-3-line"></i> Filtros
              </button>
            </div>
          </div>

          <div className="linha_pag_torneio"></div>

          <div className="container_cards_pag_torneio">
            <h2>Populares</h2>
            <div className="container_torneios_pag_torneio">
              {torneios.map((torneio) => (
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
              ))}
            </div>
          </div>
        </div>
      </main>

      <ModalCriarTorneio
        aberto={modalAberto}
        fechar={() => setModalAberto(false)}
        salvarTorneio={salvarTorneio}
      />
    </>
  );
}
