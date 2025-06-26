import { useParams } from "react-router-dom";
import { useState }   from "react";
import torneiosBase   from "../../data/torneios";   
import NavBarHome     from "../../Components/HomeNavBar/NavBarHome";
import style          from "./DetalhesTorneio.module.css";

import VisaoGeral     from "../../Components/TorneioVisaoGeral/TorneioVisaoGeral";
import Chave          from "../../Components/TorneioChave/TorneioChave";
import Partida        from "../../Components/TorneioPartida/TorneioPartida";
import Participantes  from "../../Components/TorneioParticipantes/TorneioParticipantes";

export default function DetalhesTorneio() {
  const { id } = useParams();

  const extras = JSON.parse(localStorage.getItem("torneiosRivalix") || "[]");

  const todosTorneios = [...torneiosBase, ...extras];

  const torneio = todosTorneios.find((t) => t.id === Number(id));

  if (!torneio) return <p style={{ padding: "2rem" }}>Torneio não encontrado</p>;

  const [abaAtiva, setAbaAtiva] = useState("VisaoGeral");

  return (
    <>
      <NavBarHome />

      <main className="main-content">
        <img
          className={style.imagem_torneio_detalhes}
          src={torneio.imgTorneio}
          alt={torneio.titulo}
        />

        <div className={style.container_botao_data}>
          <div className={style.container_data}>
            <h4>{torneio.titulo}</h4>
            <p>{torneio.data}</p>
          </div>
          <div className={style.container_botoes_torneio}>
            <button>Entrar no Torneio</button>
            <a href="#"><i className="ri-chat-3-fill"></i></a>
            <a href="#"><i className="ri-share-line"></i></a>
          </div>
        </div>

        <div className={style.container_botoes_links}>
          {["VisaoGeral", "Chave", "Participantes", "Partida"].map((aba) => (
            <button
              key={aba}
              className={abaAtiva === aba ? style.ativo : ""}
              onClick={() => setAbaAtiva(aba)}
            >
              {aba === "VisaoGeral" ? "Visão Geral" : aba}
            </button>
          ))}
        </div>

        <div className={style.linha_separacao}></div>

        {abaAtiva === "VisaoGeral"   && <VisaoGeral    torneio={torneio} />}
        {abaAtiva === "Chave"        && <Chave         torneio={torneio} />}
        {abaAtiva === "Participantes"&& <Participantes torneio={torneio} />}
        {abaAtiva === "Partida"      && <Partida       torneio={torneio} />}
      </main>
    </>
  );
}