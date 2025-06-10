import NavbarHome from "../../Components/HomeNavBar/NavBarHome.jsx";
import BannerPerfil from "../../Components/Perfil/BannerSection";
import PerfilCard from "../../Components/Perfil/PerfilCard.jsx";  
import InfoPerfil from "../../Components/Perfil/BioSection.jsx";
import BadgesPerfil from "../../Components/Perfil/BadgesSection.jsx";
import SocialEquipePerfil from "../../Components/Perfil/SocialEquipe.jsx";
import { useTheme } from "../../contexts/ThemeContext";

import layoutStyles from "./PerfilPageLayout.module.css"; // Importa o novo CSS

// Mock do usuário para testes
const mockUser = {
  nome: "JuiceFruit",
  nivel: 15,
  foto: "", 
  banner: "",
  bio: "Flare é conhecida por sua estratégia agressiva...",
  badges: "",
  redes: [
    // { nome: "@flare.joga", link: "https://instagram.com/flare.joga" },
    // { nome: "@flare.gg", link: "https://x.com/flare.gg" }
  ],
  equipe: "Rivalix.Team"
};

export default function PerfilPage({ user = mockUser, isOwner = true }) {
  return (
    <>
      <NavbarHome />
      <main className="main-content">
        <BannerPerfil
          bannerUrl={user.banner}
          isOwner={isOwner}
          fotoUrl={user.foto}
          nome={user.nome}
        >
          <PerfilCard nome="Seu Nome" isOwner={true} />
        </BannerPerfil>

        <section className={layoutStyles.perfilGrid}>
          <div className={layoutStyles.colunaEsquerda}>
            <InfoPerfil bioInicial={user.bio} isOwner={isOwner} />
            <BadgesPerfil badges={user.badges} isOwner={isOwner} />
          </div>

          <div className={layoutStyles.colunaDireita}>
            <SocialEquipePerfil redes={user.redes} equipe={user.equipe} isOwner={isOwner} />
          </div>
        </section>
      </main>
    </>
  );
}