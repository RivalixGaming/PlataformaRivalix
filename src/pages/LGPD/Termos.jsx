import styles from "./LGPD.module.css"; 
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";

export default function TermosDeUso() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className={styles.corpo} role="main" aria-label="Termos de Uso da Rivalix">
        {/* Botão para voltar */}
        <button
          onClick={() => navigate(-1)}
          className={styles.btnVoltar}
          aria-label="Voltar"
        >
          <i className="ri-arrow-left-line"></i>
        </button>

        <div className={styles.politicaContainer}>
          <h1 className={styles.titulo}>Termos de Uso – Rivalix</h1>
          <p className={styles.atualizacao}>Última atualização: 01 de julho de 2025</p>

          {/* 1. Aceitação */}
          <section className={styles.secao} id="aceitacao">
            <h2 className={styles.subtitulo}>1. Aceitação dos Termos</h2>
            <p className={styles.paragrafo}>
              Ao criar uma conta ou utilizar qualquer funcionalidade da Rivalix ("Plataforma"), você ("Usuário") declara ter lido, compreendido
              e aceito integralmente estes Termos de Uso. Se não concordar, não utilize a Plataforma.
            </p>
          </section>

          {/* 2. Elegibilidade */}
          <section className={styles.secao} id="elegibilidade">
            <h2 className={styles.subtitulo}>2. Elegibilidade</h2>
            <ul className={styles.lista}>
              <li>Você deve ter pelo menos 13 anos; menores de 18 precisam de consentimento dos responsáveis.</li>
              <li>Quem for legalmente impedido de celebrar contratos não pode usar a Plataforma.</li>
            </ul>
          </section>

          {/* 3. Cadastro */}
          <section className={styles.secao} id="cadastro">
            <h2 className={styles.subtitulo}>3. Cadastro e Conta</h2>
            <ul className={styles.lista}>
              <li>Informações fornecidas devem ser verdadeiras, completas e atualizadas.</li>
              <li>Mantenha sua senha em sigilo; atividades realizadas na conta são de sua responsabilidade.</li>
              <li>A Rivalix pode suspender ou encerrar contas com informações falsas ou que violem estes Termos.</li>
            </ul>
          </section>

          {/* 4. Serviços */}
          <section className={styles.secao} id="servicos">
            <h2 className={styles.subtitulo}>4. Serviços Oferecidos</h2>
            <p className={styles.paragrafo}>
              A Plataforma oferece, entre outros: criação e participação em torneios (gratuitos e pagos), ranking de jogadores, loja de produtos,
              feed social, galeria de arte, sistema de recompensas e planos de assinatura. A Rivalix pode alterar ou suspender funcionalidades a
              qualquer momento, mediante aviso prévio quando possível.
            </p>
          </section>

          {/* 5. Conduta */}
          <section className={styles.secao} id="conduta">
            <h2 className={styles.subtitulo}>5. Conduta do Usuário</h2>
            <p className={styles.paragrafo}>É proibido:</p>
            <ul className={styles.lista}>
              <li>Violar leis ou direitos de terceiros.</li>
              <li>Publicar conteúdo ilícito, ofensivo ou que infrinja propriedade intelectual.</li>
              <li>Usar a conta para atividades fraudulentas, hacking ou spamming.</li>
              <li>Manipular resultados de torneios ou rankings.</li>
            </ul>
            <p className={styles.paragrafo}>
              Violações podem resultar em advertência, suspensão ou exclusão da conta, sem reembolso.
            </p>
          </section>

          {/* 6. Pagamentos */}
          <section className={styles.secao} id="pagamentos">
            <h2 className={styles.subtitulo}>6. Pagamentos e Reembolsos</h2>
            <ul className={styles.lista}>
              <li>Pagamentos são processados por provedores terceirizados (ex.: Stripe, PayPal); leia também seus termos.</li>
              <li>Planos de assinatura renovam-se automaticamente até cancelamento.</li>
              <li>Reembolsos seguem o Código de Defesa do Consumidor e regras de cada torneio ou produto.</li>
            </ul>
          </section>

          {/* 7. PI */}
          <section className={styles.secao} id="pi">
            <h2 className={styles.subtitulo}>7. Propriedade Intelectual</h2>
            <ul className={styles.lista}>
              <li>Todo o conteúdo da Rivalix é protegido por direitos autorais.</li>
              <li>
                Usuário concede licença não exclusiva para exibir conteúdos enviados (avatar, postagens) dentro da Plataforma e em materiais
                promocionais.
              </li>
              <li>Não copie ou explore qualquer parte sem autorização expressa.</li>
            </ul>
          </section>

          {/* 8. Isenção */}
          <section className={styles.secao} id="garantias">
            <h2 className={styles.subtitulo}>8. Isenção de Garantias</h2>
            <p className={styles.paragrafo}>
              A Plataforma é fornecida "como está". A Rivalix não garante serviço ininterrupto ou livre de erros, mas empenha-se em corrigir falhas com
              agilidade.
            </p>
          </section>

          {/* 9. Limitação */}
          <section className={styles.secao} id="limitacao">
            <h2 className={styles.subtitulo}>9. Limitação de Responsabilidade</h2>
            <p className={styles.paragrafo}>
              Na máxima extensão permitida por lei, a Rivalix não se responsabiliza por danos indiretos, lucros cessantes ou perda de dados decorrentes do uso ou impossibilidade de uso da Plataforma.
            </p>
          </section>

          {/* 10. Rescisão */}
          <section className={styles.secao} id="rescisao">
            <h2 className={styles.subtitulo}>10. Rescisão</h2>
            <p className={styles.paragrafo}>
              Usuário pode encerrar a conta a qualquer momento em "Configurações". A Rivalix pode rescindir serviços caso haja violação destes Termos ou exigência legal.
            </p>
          </section>

          {/* 11. Alterações */}
          <section className={styles.secao} id="alteracoes">
            <h2 className={styles.subtitulo}>11. Alterações nos Termos</h2>
            <p className={styles.paragrafo}>
              Estes Termos podem ser atualizados periodicamente. Avisaremos por e‑mail ou aviso na Plataforma. O uso contínuo constitui aceitação.
            </p>
          </section>

          {/* 12. Lei */}
          <section className={styles.secao} id="lei">
            <h2 className={styles.subtitulo}>12. Lei Aplicável e Foro</h2>
            <p className={styles.paragrafo}>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Eventuais litígios serão resolvidos no foro da comarca de São Paulo‑SP, salvo outro definido por lei.
            </p>
          </section>

          {/* 13. Contato */}
          <section className={styles.secao} id="contato">
            <h2 className={styles.subtitulo}>13. Contato</h2>
            <p className={styles.paragrafo}>
              Dúvidas: <a href="mailto:rivalix.oficial@gmail.com" className={styles.link}>rivalix.oficial@gmail.com</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
