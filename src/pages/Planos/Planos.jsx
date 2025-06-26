import styles from './Planos.module.css';
import NavbarHome from '../../Components/HomeNavBar/NavBarHome.jsx';
import ModalPlano from '../../Components/ModalPlano/ModalPlano.jsx';
import { useState } from 'react';

export default function PlanosTorneio() {

   const planos = [
    {
      idStripe: 'free_plan',
      titulo: 'Plano Casual',
      preco: 'R$ 00,00',
      beneficios: [
        'Criação de torneios e eventos ilimitados',
        'Até 500 participantes por torneio',
        'Taxa de 10% em torneios pagos',
        'Limite reduzido de arquivos (3 por torneio)'
      ]
    },
    {
      idStripe: 'competidor_monthly',
      titulo: 'Plano Competidor',
      preco: 'R$ 20,00/mês',
      beneficios: [
        'Tudo do plano casual',
        'Remoção de anúncios',
        'Acesso antecipado a novas funcionalidades',
        'Identificação premium no perfil',
        'Criação de torneios pagos sem taxa',
        'Expansão do limite de upload de arquivos'
      ]
    },
    {
      idStripe: 'pro_player_monthly',
      titulo: 'Plano Pro-Player',
      preco: 'R$ 50,00/mês',
      beneficios: [
        'Tudo do plano competidor',
        'Ferramentas de gestão de treino e coaching',
        'Videoaulas com profissionais'
      ]
    }
  ];


  const [planoAtivo, setPlanoAtivo] = useState(planos[0]);
  const [planoSelecionado, setPlanoSelecionado] = useState(null);

  const handleConfirmar = () => {
    setPlanoAtivo(planoSelecionado);
    setPlanoSelecionado(null);      
    alert(` ${planoSelecionado.titulo} ativado com sucesso!`);
  };

  return (
    <>
      <NavbarHome />
      <main className="main-content">
        <section className={styles.container}>
          <h1 className={styles.titulo}>
            Prepare-se Para o <span>Topo!</span>
          </h1>
          <p className={styles.subtitulo}>
            Ative um plano e ganhe acesso a recursos avançados, personalizações raras e benefícios que vão impulsionar sua jornada.
          </p>

          <div className={styles.gridPlanos}>
            {planos.map((plano, index) => {
            const ativo = plano.idStripe === planoAtivo?.idStripe;

            return (
              <div
                className={`${styles.card} ${ativo ? styles.cardAtivo : ''}`}
                key={index}
              >
                <div className={styles.cardConteudo}>
                  <h3>{plano.titulo}</h3>
                  <p className={styles.preco}>{plano.preco}</p>
                  <ul>
                    {plano.beneficios.map((item, i) => (
                      <li key={i}>
                        <i className="ri-checkbox-circle-line"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={styles.botaoSelecionar}
                  onClick={() => !ativo && setPlanoSelecionado(plano)} 
                  disabled={ativo}
                >
                  {ativo ? 'Plano Atual' : 'Selecionar Plano'}
                </button>
              </div>
            );
          })}
          </div>
        </section>
      </main>

      {planoSelecionado && (
        <ModalPlano
          plano={planoSelecionado}
          onConfirmar={handleConfirmar}
          onFechar={() => setPlanoSelecionado(null)}
        />
      )}
    </>
  );
}