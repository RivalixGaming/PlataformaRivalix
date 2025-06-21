import { useParams } from "react-router-dom";
import { useState } from "react";
import torneios from "../../data/torneios";
import NavBarHome from "../../Components/HomeNavBar/NavBarHome";
import style from "./DetalhesTorneio.module.css";

import VisaoGeral from "../../Components/TorneioVisaoGeral/TorneioVisaoGeral";
import Chave from "../../Components/TorneioChave/TorneioChave";
import Partida from "../../Components/TorneioPartida/TorneioPartida";
import Participantes from "../../Components/TorneioParticipantes/TorneioParticipantes";

export default function DetalhesTorneio() {
  const params = useParams();
  const torneio = torneios.find((t) => t.id === parseInt(params.id));

  if (!torneio) {
    return <p>Torneio não encontrado</p>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [abaAtiva, setAbaAtiva] = useState("VisaoGeral");

  return (
    <>
      <NavBarHome />
      <main className="main-content">
        <img
          className={style.imagem_torneio_detalhes}
          src={torneio.imgTorneio}
          alt=""
        />
        <div className={style.container_botao_data}>
          <div className={style.container_data}>
            <h4>{torneio.titulo}</h4>
            <p>{torneio.data}</p>
          </div>
          <div className={style.container_botoes_torneio}>
            <button>Entrar no Torneio</button>
            <a href="#">
              <i class="ri-chat-3-fill"></i>
            </a>
            <a href="#">
              <i class="ri-share-line"></i>
            </a>
          </div>
        </div>

        <div className={style.container_botoes_links}>
          <button
            className={abaAtiva === "VisaoGeral" ? style.ativo : ""}
            onClick={() => setAbaAtiva("VisaoGeral")}
          >
            Visão Geral
          </button>
          <button
            className={abaAtiva === "Chave" ? style.ativo : ""}
            onClick={() => setAbaAtiva("Chave")}
          >
            Chave
          </button>
          <button
            className={abaAtiva === "Participantes" ? style.ativo : ""}
            onClick={() => setAbaAtiva("Participantes")}
          >
            Participantes
          </button>
          <button
            className={abaAtiva === "Partida" ? style.ativo : ""}
            onClick={() => setAbaAtiva("Partida")}
          >
            Partidas
          </button>
        </div>

        <div className={style.linha_separacao}></div>

        <div>
          {abaAtiva === "VisaoGeral" && <VisaoGeral />}
          {abaAtiva === "Chave" && <Chave />}
          {abaAtiva === "Participantes" && <Participantes />}
          {abaAtiva === "Partida" && <Partida />}
        </div>
      </main>
    </>
  );
}
