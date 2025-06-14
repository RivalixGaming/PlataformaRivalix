import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';
import styles from './NotificacoesPage.module.css';
import NavbarHome from '../../Components/HomeNavBar/NavBarHome';
import logo from '../../assets/LogoSolo.png';

export default function NotificacoesPage() {
  const { theme } = useTheme();
  const [notificacoes, setNotificacoes] = useState([
    {
      id: 1,
      data: '04/07/2025',
      titulo: 'Rivalix',
      conteudo: 'Se desafie! Existem missões ativas dentro da sua conta para você evoluir com a plataforma!',
      lida: false,
    },
    {
      id: 2,
      data: '04/07/2025',
      titulo: 'Rivalix',
      conteudo: 'Bem-vindo à Rivalix! Compita por prêmios ou experiência dentro da plataforma e eleve o seu jogo!',
      lida: false,
    }
  ]);

  // Ações para backend futuramente
  const marcarComoLida = (id) => {
    setNotificacoes((prev) =>
      prev.map((noti) =>
        noti.id === id ? { ...noti, lida: true } : noti
      )
    );
  };

  const apagarNotificacao = (id) => {
    setNotificacoes((prev) => prev.filter((noti) => noti.id !== id));
  };

  return (
    <>
      <NavbarHome />
      <main className="main-content">
        <section className={`${styles.container} ${theme === 'dark' ? styles.dark : ''}`}>
          <h1 className={styles.titulo}>Notificações</h1>
          <hr className={styles.divisor} />

          {/* Botões de filtro simulados */}
          <div className={styles.filtros}>
            <button className={styles.botaoFiltro}>Todas</button>
            <button className={styles.botaoFiltro}>Somente Hoje</button>
            <button className={styles.botaoFiltro}>Importantes</button>
          </div>

          <div className={styles.lista}>
            {notificacoes.map((noti) => (
              <div key={noti.id} className={`${styles.item} ${noti.lida ? styles.lida : ''}`}>
                <div className={styles.data}>{noti.data}</div>
                <div className={styles.conteudo}>
                  <img src={logo} alt="Ícone Rivalix" className={styles.icone} />
                  <div>
                    <strong className={styles.nome}>{noti.titulo}</strong>
                    <p className={styles.texto}>{noti.conteudo}</p>
                  </div>
                </div>
                <div className={styles.botoesAcao}>
                  {!noti.lida && (
                    <button onClick={() => marcarComoLida(noti.id)}>
                      Marcar como lida
                    </button>
                  )}
                  <button onClick={() => apagarNotificacao(noti.id)}>
                    Apagar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}