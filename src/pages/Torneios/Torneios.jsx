import "./Torneios.css";
import { Link } from "react-router-dom";
import NavBarHome   from "../../Components/HomeNavBar/NavBarHome";
import CardTorneio  from "../../Components/CardTorneio/CardTorneio";
import torneioInicial from "../../data/torneios";
import ModalCriarTorneio from "../../Components/Torneio/ModalCriarTorneio";
import React, { useState, useEffect } from "react";

export default function Torneios() {
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
        {/* cabeçalho */}
        <div className="container_descubra_torneios">
          <div>
            <h1>Descubra Torneios</h1>
            <p>Participe de torneios dentro da Rivalix</p>
          </div>
          <button onClick={() => setModalAberto(true)}>
            <span>+</span> Crie Torneios
          </button>
        </div>

        {/* navegação */}
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
            <button>
              <i className="ri-filter-3-line"></i> Filtros
            </button>
          </div>
        </div>

        <div className="linha_pag_torneio"></div>

        {/* cards */}
        <div className="container_cards_pag_torneio">
          <h2>Populares</h2>
          <div className="container_torneios_pag_torneio">
            {torneios.map((t) => (
              <CardTorneio
                key={t.id}
                id={t.id}
                titulo={t.titulo}
                foto={t.imgTorneio}
                localizacao={t.localizacao}
                modalidade={t.modalidade}
                tipo={t.tipo}
                data={t.data}
                vagaRestante={t.vagasRestantes}
                vagaTotal={t.totalVagas}
                jogo={t.jogo}
              />
            ))}
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