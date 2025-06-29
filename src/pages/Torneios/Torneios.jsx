import styles from "./Torneios.module.css";
import { Link } from "react-router-dom";
import NavBarHome from "../../Components/HomeNavBar/NavBarHome";
import CardTorneio from "../../Components/CardTorneio/CardTorneio";
import torneioInicial from "../../data/torneios";
import ModalCriarTorneio from "../../Components/Torneio/ModalCriarTorneio";
import React, { useState, useEffect } from "react";

export default function Torneios() {
  const [modalAberto, setModalAberto] = useState(false);

  const [torneios, setTorneios] = useState(() => {
    const local = localStorage.getItem("torneiosRivalix");
    return local ? JSON.parse(local) : torneioInicial;
  });

  useEffect(() => {
    localStorage.setItem("torneiosRivalix", JSON.stringify(torneios));
  }, [torneios]);

  const salvarTorneio = (novoTorneio) => {
    const listaPublicaAtualizada = [...torneios, novoTorneio];
    setTorneios(listaPublicaAtualizada);
    localStorage.setItem(
      "torneiosRivalix",
      JSON.stringify(listaPublicaAtualizada)
    );

    const meus = JSON.parse(
      localStorage.getItem("meusTorneiosRivalix") || "[]"
    );
    meus.push(novoTorneio);
    localStorage.setItem("meusTorneiosRivalix", JSON.stringify(meus));
  };

  return (
    <>
      <NavBarHome />

      <main className="main-content">
        {/* cabeçalho */}
        <div className={styles.container_descubra_torneios}>
          <div>
            <h1>Descubra Torneios</h1>
            <p>Participe de torneios dentro da Rivalix</p>
          </div>
          <button onClick={() => setModalAberto(true)}>
            <span>+</span> Crie Torneios
          </button>
        </div>

        {/* navegação */}
        <div className={styles.rotas_pag_torneios}>
          <div className={styles.links_pag_torneios}>
            <button
              className={styles.botao_torneio_explorar}
              style={{ borderBottom: "2px solid #ff6a00" }}
            >
              Explorar
            </button>
            <Link to="/meus-torneios">
              <button className={styles.botao_torneio_meus_torneios}>
                Meus Torneios
              </button>
            </Link>
          </div>
          <div className={styles.filtro_torneios}>
            <button>
              <i className="ri-filter-3-line"></i> Filtros
            </button>
          </div>
        </div>

        <div className={styles.linha_pag_torneio}></div>

        {/* cards */}
        <div className={styles.container_cards_pag_torneio_title}>
          <h2>Populares</h2>
          <div className={styles.container_cards_pag_torneio}>
            <div className={styles.container_torneios_pag_torneio}>
              {torneios.slice(0, 10).map((t) => (
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
                  estado={t.localizacao}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.container_cards_pag_torneio_title}>
          <h2>Presenciais</h2>
          <div className={styles.container_cards_pag_torneio}>
            <div className={styles.container_torneios_pag_torneio}>
              {torneios
                .filter((t) => t.tipo === "Presencial")
                .slice(0, 10)
                .map((t) => (
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
                    estado={t.localizacao}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className={styles.container_cards_pag_torneio_title}>
          <h2>Online</h2>
          <div className={styles.container_cards_pag_torneio}>
            <div className={styles.container_torneios_pag_torneio}>
              {torneios
                .filter((t) => t.tipo === "Online")
                .slice(0, 10)
                .map((t) => (
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
                    estado={t.localizacao}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className={styles.container_cards_pag_torneio_title}>
          <h2>Solo</h2>
          <div className={styles.container_cards_pag_torneio}>
            <div className={styles.container_torneios_pag_torneio}>
              {torneios
                .filter((t) => t.modalidade === "Solo")
                .slice(0, 10)
                .map((t) => (
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
                    estado={t.localizacao}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className={styles.container_cards_pag_torneio_title}>
          <h2>Em Dupla</h2>
          <div className={styles.container_cards_pag_torneio}>
            <div className={styles.container_torneios_pag_torneio}>
              {torneios
                .filter((t) => t.modalidade === "Dupla")
                .slice(0, 10)
                .map((t) => (
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
                    estado={t.localizacao}
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
