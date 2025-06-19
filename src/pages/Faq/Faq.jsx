import NavBarHome from "../../Components/HomeNavBar/NavBarHome.jsx";
import styles from './Faq.module.css';
import { useState } from 'react';
import { useTheme } from "../../contexts/ThemeContext";

export const faqData = [
  {
    categoria: "Sobre a Rivalix",
    perguntas: [
      {
        pergunta: "O que é a Rivalix?",
        resposta: "A Rivalix é uma plataforma de torneios de e-sports criada para conectar jogadores, organizadores e comunidades em competições autênticas, acessíveis e premiadas."
      },
      {
        pergunta: "Como a Rivalix funciona?",
        resposta: "Você se cadastra, participa de torneios, cumpre missões, acumula pontos e sobe no ranking. Jogadores também podem criar seus próprios campeonatos pela plataforma."
      },
      {
        pergunta: "A Rivalix é gratuita?",
        resposta: "Sim! A maioria das funcionalidades são gratuitas. Oferecemos também planos pagos com recursos exclusivos."
      },
      {
        pergunta: "Quem pode usar a plataforma?",
        resposta: "Qualquer pessoa com mais de 13 anos, apaixonada por games e competições, pode participar."
      },
      {
        pergunta: "Quais tipos de jogos são suportados?",
        resposta: "Começamos com foco em jogos de luta (como Street Fighter, Mortal Kombat, Tekken...), mas em breve traremos novas categorias!"
      },
      {
        pergunta: "Posso organizar meus próprios torneios?",
        resposta: "Sim! Você pode criar, gerenciar e divulgar torneios diretamente pela plataforma."
      }
    ]
  },
  {
    categoria: "Cadastro e Conta",
    perguntas: [
      {
        pergunta: "Esqueci minha senha, e agora?",
        resposta: "Clique em “Esqueci minha senha” na tela de login ou em 'Alterar Senha' nas configurações e siga as instruções enviadas por e-mail."
      },
      {
        pergunta: "Como edito meu perfil ou foto?",
        resposta: "Acesse sua página de perfil e clique nos ícones de edição para alterar nome, bio, foto e redes sociais."
      },
      {
        pergunta: "Posso vincular minha conta a redes sociais?",
        resposta: "Sim! Você pode adicionar links de suas redes sociais no perfil para se conectar com a comunidade."
      },
      {
        pergunta: "Como funcionam as badges e níveis de jogador?",
        resposta: "Você ganha badges ao completar desafios e subir de nível com base em suas atividades e desempenho nos torneios."
      }
    ]
  },
  {
    categoria: "Torneios e Partidas",
    perguntas: [
      {
        pergunta: "Como participo de um torneio?",
        resposta: "Acesse a aba “Torneios”, escolha um campeonato aberto e clique em “Participar”. Pronto e feito!"
      },
      {
        pergunta: "Onde vejo os torneios disponíveis?",
        resposta: "Todos os torneios ativos estão listados na aba “Torneios”, com filtros por jogo, data e tipo."
      },
      {
        pergunta: "O que acontece se eu perder uma partida?",
        resposta: "Depende do formato do torneio. Em alguns casos você segue na repescagem, em outros é eliminado."
      },
      {
        pergunta: "Os torneios têm premiação?",
        resposta: "Sim! Alguns oferecem prêmios em pontos, XP, brindes ou até dinheiro — verifique os detalhes antes de entrar."
      },
      {
        pergunta: "Como crio meu próprio torneio?",
        resposta: "Vá em “Criar Torneio”, preencha os dados e configure as regras."
      },
      {
        pergunta: "Como funciona o sistema de pontuação ou ranking?",
        resposta: "Você acumula pontos ao participar de torneios, cumprir missões e vencer partidas. Esses pontos definem sua posição no ranking geral."
      }
    ]
  },
  {
    categoria: "Planos e Monetização",
    perguntas: [
      {
        pergunta: "A Rivalix tem planos pagos? O que eles oferecem?",
        resposta: "Sim. Os planos pagos oferecem benefícios como criação ilimitada de torneios, personalização avançada e recompensas exclusivas."
      },
      {
        pergunta: "Como funciona o sistema de recompensas?",
        resposta: "Você ganha pontos ao cumprir missões, participar de torneios e interagir com a plataforma. Esses pontos acumulados aumenta seu nível e consequentemente te dará prêmios!"
      },
      {
        pergunta: "Os pagamentos são seguros?",
        resposta: "Totalmente. Utilizamos plataformas confiáveis como Stripe para garantir segurança nas transações."
      },
      {
        pergunta: "Como cancelo um plano?",
        resposta: "Você pode cancelar a qualquer momento nas configurações da sua conta. O plano permanece ativo até o fim do ciclo atual."
      }
    ]
  },
  {
    categoria: "Funcionalidades e Recursos",
    perguntas: [
      {
        pergunta: "O que são missões e como completá-las?",
        resposta: "São desafios diários e sazonais que você pode cumprir para ganhar XP e recompensas. Basta seguir os objetivos listados em cada missão."
      },
      {
        pergunta: "Como funciona o sistema de recompensas por atividades?",
        resposta: "Cada ação na Rivalix (como jogar, ganhar partidas, completar missões) gera pontos que podem ser acumulados e trocados."
      },
      {
        pergunta: "A Rivalix tem integração com plataformas como Discord, Twitch ou Steam?",
        resposta: "No momento não, mas temos nossa comunidade no discord onde você pode vivenciar mais da experiência Rivalix."
      }
    ]
  },
  {
    categoria: "Acessibilidade e Dispositivos",
    perguntas: [
      {
        pergunta: "A Rivalix funciona no celular?",
        resposta: "Sim! A versão mobile está otimizada para você jogar e gerenciar torneios de onde quiser."
      },
      {
        pergunta: "Existe um app da Rivalix?",
        resposta: "Ainda não, mas a plataforma é 100% responsiva no navegador mobile. O app está nos nossos planos."
      },
      {
        pergunta: "A plataforma tem suporte a modo escuro?",
        resposta: "Sim! O modo escuro pode ser ativado nas configurações de tema."
      },
      {
        pergunta: "É possível usar a Rivalix com leitores de tela ou plugins de acessibilidade?",
        resposta: "Sim. Estamos sempre melhorando a acessibilidade, seguindo as boas práticas de design inclusivo."
      }
    ]
  },
  {
    categoria: "Suporte e Segurança",
    perguntas: [
      {
        pergunta: "Como denuncio um jogador ou comportamento tóxico?",
        resposta: "Use o botão de denúncia no perfil do jogador ou torneio. Analisaremos com prioridade."
      },
      {
        pergunta: "Como entro em contato com o suporte?",
        resposta: "Você pode enviar uma mensagem pelo e-mail oficial da plataforma."
      },
      {
        pergunta: "Meus dados estão seguros na Rivalix?",
        resposta: "Sim. Utilizamos criptografia e boas práticas de segurança para proteger seus dados."
      },
      {
        pergunta: "O que fazer em caso de erro técnico ou bug?",
        resposta: "Relate o problema pelo email com o máximo de detalhes. Nossa equipe técnica irá investigar rapidamente."
      }
    ]
  },
  {
    categoria: "Comunidade e Futuro",
    perguntas: [
      {
        pergunta: "Como posso fazer parte da comunidade Rivalix?",
        resposta: "Participe dos torneios, interaja nas redes sociais e entre no nosso servidor oficial no Discord."
      },
      {
        pergunta: "Posso sugerir melhorias ou novos jogos?",
        resposta: "Sim! Amamos feedbacks. Use nosso formulário de sugestões ou entre em contato pelo Discord."
      },
      {
        pergunta: "A Rivalix vai expandir para outros estilos de jogos além de luta?",
        resposta: "Sim! Já estamos planejando novas categorias como FPS, MOBA e Battle Royale."
      },
      {
        pergunta: "Onde encontro as novidades e atualizações da plataforma?",
        resposta: "Acompanhe nosso blog, Instagram ou Discord para ficar por dentro de tudo."
      }
    ]
  }
];

export default function FAQ() {
  const [ativo, setAtivo] = useState(null);
  const { theme } = useTheme();

  const togglePergunta = (id) => {
    setAtivo(ativo === id ? null : id);
  };

  return (
    <>
      <NavBarHome />
      <main className="main-content">
        <div className={`${styles.container} ${theme === 'dark' ? 'dark' : ''}`}>          
            <h1 className={styles.titulo}>Perguntas Frequentes</h1>
            {faqData.map((categoria, i) => (
            <div key={i} className={styles.categoria}>
              <h2 className={styles.categoriaTitulo}>{categoria.categoria}</h2>
              <div className={styles.lista}>
                {categoria.perguntas.map((item, j) => {
                  const id = `${i}-${j}`;
                  return (
                    <div key={id} className={styles.item}>
                      <button onClick={() => togglePergunta(id)} className={styles.pergunta}>
                        {item.pergunta}
                        <span className={styles.icone}>{ativo === id ? '−' : '+'}</span>
                      </button>
                      {ativo === id && <div className={styles.resposta}>{item.resposta}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}