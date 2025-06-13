import { useContext, useState } from 'react';
import NavbarHome from "../../Components/HomeNavBar/NavBarHome.jsx";
import { ThemeContext } from '../../contexts/ThemeContext';
import logoClaro from '../../assets/logoClaro.png';
import logoDark from '../../assets/LogoDark.png';
import { useProfile } from '../../contexts/ProfileContext';
import SelecionarAvatar from '../../Components/SelecionarAvatar/SelecionarAvatar.jsx';
import './Configuracoes.css';

export default function ConfiguracoesPage() {
    const { theme, setTheme } = useContext(ThemeContext);
    const isDark = theme === 'dark';
    const logo = isDark ? logoDark : logoClaro;
     const [mostrarSelecionador, setMostrarSelecionador] = useState(false);

    // Troca de tema
    const handleToggle = (e) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
    };

    const handleChangeUsername = () => {
        console.log("Abrir modal para mudar nome de usuário");
    };

    const handleChangeBio = () => {
        console.log("Abrir modal para mudar bio");
    };

    const handleChangeGender = () => {
        console.log("Selecionar gênero ou pronomes");
    };

    const handleChangeBirth = () => {
        console.log("Selecionar nova data de nascimento");
    };

    // Adicionar as outras funcionalidades futuramente no mesmo padrão...

    const [showAchievements, setShowAchievements] = useState(true);
    const [showXP, setShowXP] = useState(false);

    const toggleAchievements = () => setShowAchievements((prev) => !prev);
    const toggleXP = () => setShowXP((prev) => !prev);

  return (
    <>
      <NavbarHome />
      <main className="main-content">
        <h1 className="config-sr-only">Página de Configurações</h1>

        <section aria-labelledby="config-tema-section" className="config-tema">
          <h2 id="config-tema-section" className="config-titulo-principal">
            Tema: Claro/Escuro
            <label className="config-switch" htmlFor="toggle-tema">
              <input
                id="toggle-tema"
                type="checkbox"
                checked={isDark}
                onChange={handleToggle}
              />
              <span className="config-slider"></span>
            </label>
          </h2>
        </section>

        <div className="config-grid">

          {/* Informações Pessoais */}
          <section aria-labelledby="config-info-pessoal">
            <h3 id="config-info-pessoal">Informações Pessoais</h3>
            <ul>
              <li><button onClick={handleChangeUsername}>Alterar Nome de Usuário</button></li>

              <li>
                <button onClick={() => setMostrarSelecionador(true)}>
                  Alterar Foto de Perfil <i className="ri-pencil-fill"></i>
                </button>

                {mostrarSelecionador && (
                    <SelecionarAvatar onClose={() => setMostrarSelecionador(false)} />
                )}
              </li>
                  {mostrarSelecionador && (
                    <SelecionarAvatar onClose={() => setMostrarSelecionador(false)} />
                  )}

              <li><button onClick={handleChangeBio}>Alterar Biografia</button></li>
              <li><button onClick={handleChangeGender}>Gênero / Pronomes</button></li>
              <li><button onClick={handleChangeBirth}>Data de Nascimento</button></li>
            </ul>
          </section>

          {/* Notificações */}
          <section aria-labelledby="config-notificacoes">
            <h3 id="config-notificacoes">Notificações</h3>
            <ul>
              <li><button>Personalizar Notificações</button></li>
            </ul>
          </section>

          {/* Privacidade */}
          <section aria-labelledby="config-privacidade">
            <h3 id="config-privacidade">Privacidade</h3>
            <ul>
              <li><button>Trocar E-mail</button></li>
              <li><button>Alterar Senha</button></li>
              <li><button>Verificação em 2 Etapas</button></li>
              <li><button>Sessões Ativas (deslogar de outros dispositivos)</button></li>
              <li><button>Reautenticação de Conta</button></li>
            </ul>
          </section>

          {/* Segurança */}
          <section aria-labelledby="config-seguranca">
            <h3 id="config-seguranca">Segurança e Acesso</h3>
                <ul>
                    <li>
                    <button
                        className={`config-toggle-button ${showAchievements ? 'ativo' : 'inativo'}`}
                        onClick={toggleAchievements}
                    >
                        Mostrar conquistas: {showAchievements ? 'ATIVADO' : 'DESATIVADO'}
                    </button>
                    </li>
                    <li>
                    <button
                        className={`config-toggle-button ${showXP ? 'ativo' : 'inativo'}`}
                        onClick={toggleXP}
                    >
                        Mostrar nível/XP: {showXP ? 'ATIVADO' : 'DESATIVADO'}
                    </button>
                    </li>
                </ul>
            </section>

          {/* Conta */}
          <section aria-labelledby="config-conta">
            <h3 id="config-conta">Conta</h3>
            <ul>
              <li><button>Pausar Conta Temporariamente</button></li>
              <li><button>Excluir Conta Permanentemente</button></li>
              <li><button>Exportar Dados</button></li>
              <li><button>Recarga de Saldo</button></li>
              <li><button>Sair da Conta</button></li>
              <li><button>Trocar de Conta</button></li>
            </ul>
          </section>

        </div>
      </main>
    </>
  );
}