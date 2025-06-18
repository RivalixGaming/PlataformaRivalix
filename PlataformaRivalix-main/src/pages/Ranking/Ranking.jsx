import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import UserRanking from "../../Components/UserRanking/UserRanking.jsx";
import styles from "./RankingPage.module.css";
import defaultAvatar from "../../assets/icon-teste-2.png";
import NavbarHome from "../../Components/HomeNavBar/NavBarHome.jsx";

// Simula um ranking de jogadores
const jogadores = Array.from({ length: 20 }, (_, i) => ({
  nome: `Jogador${i + 1}`,
  pontos: Math.floor(Math.random() * 10000 + 1000),
  avatar: defaultAvatar,
})).sort((a, b) => b.pontos - a.pontos);

export default function RankingPage() {
  const { theme } = useTheme();
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const jogadoresVisiveis = mostrarTodos ? jogadores : jogadores.slice(0, 10);

  return (
    <>
      <NavbarHome />
      <main className={`main-content ${theme === "dark" ? styles.dark : styles.light}`}>
        <h1 className={styles.titulo}>
          Cada vitória conta. Conquiste seu espaço entre os grandes da <span>Rivalix.</span>
        </h1>

        <article className={styles.rankingContainer}>
          <h2>Ranking</h2>
          <p>Cada posição aqui carrega história, não estatística.</p>

          <div className={styles.listaRanking}>
            {jogadoresVisiveis.map((jogador, index) => (
              <div key={index} className={styles.cardWrapper}>
                <span className={styles.posicao}>#{index + 1}</span>
                <UserRanking
                  nome={jogador.nome}
                  pontos={jogador.pontos}
                  avatar={jogador.avatar}
                />
              </div>
            ))}
          </div>

          {!mostrarTodos && (
            <button
              className={styles.botaoMais}
              onClick={() => setMostrarTodos(true)}
            >
              Mostrar Mais
            </button>
          )}
        </article>
      </main>
    </>
  );
}