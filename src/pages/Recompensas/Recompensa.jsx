import NavbarHome from '../../Components/HomeNavBar/NavBarHome.jsx';
import styles from './RecompensasPage.module.css';
import emblema from '../../assets/badge.png';
import insigna from '../../assets/insigna.png';
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext'; 

export default function RecompensasPage() {
  const { theme } = useTheme();
  const [nivel, setNivel] = useState(0);
  const [pontos, setPontos] = useState(500);

  const missoes = [
    { id: 1, titulo: 'Participe de três torneios', progresso: 3, meta: 3, tipo: 'Diária', recompensa: '100xp', concluida: true },
    { id: 2, titulo: 'Enfrente 5 jogadores diferentes em um único torneio', progresso: 0, meta: 5, tipo: 'Secundária', recompensa: '200xp', concluida: false },
    { id: 3, titulo: 'Vença 3 partidas seguidas em torneios', progresso: 0, meta: 3, tipo: 'Secundária', recompensa: '150xp', concluida: false }
  ];

  const handleResgatarTudo = () => {
    alert('Recompensas resgatadas (simulação)');
  };

  return (
    <>
      <NavbarHome />
      <main className={`main-content ${theme === 'dark' ? 'dark-mode' : ''}`}> {/* Aplica a classe do tema */}
        <section className={styles.container}>
          <h1 className={styles.titulo}>Recompensas</h1>
            <div className={styles.recompensasHeader}>
                <p className={styles.subtitulo}>Participe de torneios e conclua missões para ganhar pontos.</p>
                <button onClick={handleResgatarTudo} className={styles.btnResgatar}>Resgatar Tudo</button>
            </div>
            <div className={styles.line}></div>
          <div className={styles.nivelContainer}>
                <div>
                    <p className={styles.nivelLabel}>Nível Atual: <strong>{nivel}</strong></p>
                    <div className={styles.progressBarWrapper}>
                        <div className={styles.progressBar} style={{ width: `${(pontos / 1500) * 100}%` }}></div>
                    </div>
                    <span className={styles.pontos}>{pontos} / 1500 pontos</span>
                    </div>

                    <div>
                    <p className={styles.desbloqueioTitulo}>Desbloqueie no Nível 1:</p>
                    <div className={styles.recompensasImg}>
                            <img src={emblema} alt="Emblema 1" />
                            <img src={insigna} alt="Insígnia 1" />
                    </div>
                </div>
            </div>

          <h2 className={styles.missoesTitulo}>Missões</h2>

          <div className={styles.missoesWrapper}>
            <div className={styles.missoesDiarias}>
              {missoes.filter(m => m.tipo === 'Diária').map(missao => (
                <div key={missao.id} className={styles.missaoCard}>
                    <h3>Missões Diárias</h3>
                  <p>{missao.titulo}</p>
                  <div className={styles.progressMiniWrapper}>
                    <div className={styles.progressMini} style={{ width: `${(missao.progresso / missao.meta) * 20}%` }}></div>
                  </div>
                  <span className={styles.recompensa}>{missao.recompensa}</span>
                </div>
              ))}
            </div>

            <div className={styles.missoesSecundarias}>
              <h3>Missões Secundárias</h3>
              {missoes.filter(m => m.tipo === 'Secundária').map(missao => (
                <p key={missao.id}>
                  {missao.progresso}/{missao.meta} {missao.titulo}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}