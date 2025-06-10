import { useState } from "react";
import styles from "./SocialEquipe.module.css";
import { useTheme } from "../../contexts/ThemeContext";

const redesDisponiveis = {
  instagram: {
    nome: "Instagram",
    icon: "ri-instagram-line",
    url: (nome) => `https://instagram.com/${nome}`,
  },
  x: {
    nome: "X (Twitter)",
    icon: "ri-twitter-x-line",
    url: (nome) => `https://x.com/${nome}`,
  },
  facebook: {
    nome: "Facebook",
    icon: "ri-facebook-circle-line",
    url: (nome) => `https://facebook.com/${nome}`,
  },
  youtube: {
    nome: "YouTube",
    icon: "ri-youtube-line",
    url: (nome) => `https://youtube.com/@${nome}`,
  },
  twitch: {
    nome: "Twitch",
    icon: "ri-twitch-line",
    url: (nome) => `https://twitch.tv/${nome}`,
  },
};

export default function SocialEquipePerfil({ redes = [], equipe, isOwner }) {
  const { theme } = useTheme();
  const [tipoRede, setTipoRede] = useState("instagram");
  const [nomePerfil, setNomePerfil] = useState("");
  const [links, setLinks] = useState(redes);

  const handleAddRede = () => {
    if (nomePerfil.trim() === "") return;
    if (links.find((r) => r.tipo === tipoRede)) return;
    if (links.length >= 5) return;

    const redeSelecionada = redesDisponiveis[tipoRede];
    const link = redeSelecionada.url(nomePerfil.replace(/^@/, ""));

    setLinks([
      ...links,
      {
        nome: `@${nomePerfil.replace(/^@/, "")}`,
        link,
        tipo: tipoRede,
        editando: false,
      },
    ]);
    setNomePerfil("");
  };

  const toggleEditar = (index) => {
    const novaLista = [...links];
  const rede = novaLista[index];

  if (rede.editando && rede.nome.trim() === "@") {
    novaLista.splice(index, 1);
  } else {
    rede.editando = !rede.editando;
  }

  setLinks(novaLista);
  };

  const handleNomeChange = (index, novoNome) => {
    const novaLista = [...links];
    const novoTrimado = novoNome.trim().replace(/^@/, "");
    const redeSelecionada = redesDisponiveis[novaLista[index].tipo];

    novaLista[index].nome = `@${novoTrimado}`;
    novaLista[index].link = redeSelecionada.url(novoTrimado);
    setLinks(novaLista);
  };

  return (
    <div className={`${styles.container} ${theme === "dark" ? styles.dark : ""}`}>
      <h2 className={styles.titulo}>Social</h2>

      {isOwner && links.length < 5 && (
        <div className={styles.semConteudo}>
          <select
            className={`${styles.select} ${theme === "dark" ? styles.selectDark : ""}`}
            value={tipoRede}
            onChange={(e) => setTipoRede(e.target.value)}
          >
            {Object.entries(redesDisponiveis).map(([key, rede]) => (
              <option key={key} value={key} disabled={links.some((r) => r.tipo === key)}>
                {rede.nome}
              </option>
            ))}
          </select>

          <input
            className={styles.inputSocial}
            type="text"
            placeholder="@seuperfil"
            value={nomePerfil}
            onChange={(e) => setNomePerfil(e.target.value)}
          />

          <button className={styles.btnAdd} onClick={handleAddRede}>
            <i className="ri-add-line"></i> Adicionar
          </button>
        </div>
      )}

      {links.length > 0 && (
        <ul className={styles.listaRedes}>
          {links.map((rede, index) => (
            <li key={index}>
              <i style={{ color: "var(--roxo-vivo)" }} className={redesDisponiveis[rede.tipo]?.icon}></i>{" "}
              {rede.editando ? (
                <>
                  <input
                    className={styles.inputSocial}
                    value={rede.nome.replace(/^@/, "")}
                    onChange={(e) => handleNomeChange(index, e.target.value)}
                  />
                  <button onClick={() => toggleEditar(index)}>
                    <i className="ri-check-line"></i>
                  </button>
                </>
              ) : (
                <>
                  <a href={rede.link} target="_blank" rel="noopener noreferrer">
                    {rede.nome}
                  </a>
                  {isOwner && (
                    <button onClick={() => toggleEditar(index)}>
                      <i className="ri-edit-line"></i>
                    </button>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      <h2 className={styles.titulo}>Equipes</h2>
      {equipe ? (
        <div className={styles.equipe}><i className="ri-team-fill"></i> {equipe}</div>
      ) : isOwner ? (
        <div className={styles.semConteudo}>
          <p>Você ainda não está em uma equipe.</p>
          <button className={styles.btnAdd}>
            <i className="ri-add-line"></i> Adicionar Equipe
          </button>
        </div>
      ) : (
        <p className={styles.semEquipe}>Sem equipe.</p>
      )}
    </div>
  );
}
