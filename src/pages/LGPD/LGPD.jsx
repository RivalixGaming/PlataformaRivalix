import styles from './LGPD.module.css';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { useNavigate } from "react-router-dom";

export default function LGPD() {
    const navigate = useNavigate();

    return (
        <>
        <Navbar />
            <main className={styles.corpo} role="main" aria-label="Política de Privacidade e Segurança">
                <button onClick={() => navigate(-1)} className={styles.btnVoltar} arial-label="Voltar">
                    <i class="ri-arrow-left-line"></i>
                </button>

                <div className={styles.politicaContainer}>
                    <h1 className={styles.titulo}>
                        Política de Privacidade e Segurança - Rivalix
                    </h1>

                    <p className={styles.atualizacao}>Última Atualização: 01 de Julho de 2025</p>

                    <p className={styles.paragrafo}>
                        A Rivalix se compromete a proteger a privacidade e os dados pessoais dos seus usuários, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD). Esta Política descreve como coletamos, utilizamos, armazenamos e compartilhamos as informações dos usuários da nossa plataforma.
                    </p>

                    <section className={styles.secao}>
                        <h2 className={styles.subtitulo}>1. Dados que coletamos</h2>
                            <ul className={styles.lista}>
                                <li>
                                    <strong>Dados de Cadastro:</strong> Nome, e-mail, senha, nome de usuário, foto, bio e redes sociais.
                                </li>
                                <li>
                                    <strong>Dados de Utilização:</strong> Participações em torneios, ranking, interações no feed, uploads na galeria, recompensas e histórico de compras.
                                </li>
                                <li>
                                    <strong>Dados de Pagamento:</strong> Informações de pagamento e transações realizadas na loja e planos pagos.
                                </li>
                                <li>
                                    <strong>Dados Técnicos:</strong> Endereço IP, tipo de dispositivo, navegador e cookies.
                                </li>
                            </ul>
                    </section>

                    <section className={styles.secao}>
                        <h2 className={styles.subtitulo}>2. Finalidades do uso dos dados</h2>
                            <ul className={styles.lista}>
                                <li>
                                    Gerenciar contas e perfis personalizados.
                                </li>
                                <li>
                                   Exibir rankings, torneios e interações sociais.
                                </li>
                                <li>
                                    Processar compras e planos pagos.
                                </li>
                                <li>
                                    Enviar notificações relevantes.
                                </li>
                                <li>
                                    Garantir segurança, estabilidade e melhorias da plataforma.
                                </li>
                            </ul>
                    </section> 

                    <section className={styles.secao}>
                        <h2 className={styles.subtitulo}>3. Compartilhamento de dados</h2>
                        <p className={styles.paragrafo}>
                            Compartilhamos dados com prestadores de serviços (como processadores de pagamento), parceiros comerciais (com consentimento) e autoridades legais quando exigido por lei.
                        </p>
                    </section>

                    <section className={styles.secao}>
                        <h2 className={styles.subtitulo}>4. Cookies e tecnologias semelhantes</h2>
                        <p className={styles.paragrafo}>
                           Utilizamos cookies para melhorar sua experiência, personalizar conteúdo e coletar dados analíticos. Você pode desativá-los nas configurações do seu navegador.
                        </p>
                    </section>

                    <section className={styles.secao}>
                        <h2 className={styles.subtitulo}>5. Seus direitos</h2>
                        <ul className={styles.lista}>
                            <li>Confirmar a existência de tratamento de dados.</li>
                            <li>Solicitar acesso, correção ou exclusão dos dados.</li>
                            <li>Portabilidade e revogação do consentimento.</li>
                            <li>Anonimização ou bloqueio de dados tratados indevidamente.</li>
                        </ul>
                        <p className="paragrafo">
                            Para exercer seus direitos, entre em contato: <a href="mailto:rivalix.oficial@gmail.com"><strong>rivalix.oficial@gmail.com</strong></a>
                        </p>
                    </section>

                    <section className={styles.secao}>
                        <h2 className={styles.subtitulo}>6. Segurança dos dados</h2>
                        <p className={styles.paragrafo}>
                           Seus dados são armazenados em servidores seguros, com controles técnicos e administrativos para prevenir acessos não autorizados, perda ou destruição.
                        </p>
                    </section>

                    <section className={styles.secao}>
                        <h2 className={styles.subtitulo}>7. Retenção</h2>
                        <p className={styles.paragrafo}>
                           Retemos seus dados enquanto sua conta estiver ativa ou conforme exigido por lei.
                        </p>
                    </section>

                    <section className={styles.secao}>
                        <h2 className={styles.subtitulo}>8. Alterações nesta Política</h2>
                        <p className={styles.paragrafo}>
                           Esta política poderá ser atualizada a qualquer momento. Avisaremos por e-mail ou notificação na plataforma. O uso contínuo após alterações indica concordância com a nova versão.
                        </p>
                    </section>

                    <section className={styles.secao}>
                        <h2 className={styles.subtitulo}>9. Contato</h2>
                        <p className={styles.paragrafo}>
                          Email:<a href="malito:rivalix.oficial@gmail.com">E-mail: rivalix.oficial@gmail.com</a>
                        </p>
                    </section>
                </div>
            </main>
        <Footer />
        </>
    )
}