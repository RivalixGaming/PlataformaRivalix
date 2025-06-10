import { useState, useRef, useEffect } from "react";
import styles from "./BannerSection.module.css";
import defaultBanner from "../../assets/defaultBanner.png";
import { useTheme } from "../../contexts/ThemeContext";
import PerfilCard from "./PerfilCard.jsx";
import { useProfile } from "../../contexts/ProfileContext";
import SelecionarAvatar from "../SelecionarAvatar/SelecionarAvatar";

export default function BannerPerfil({ bannerUrl, isOwner, nome }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [mostrarSelecionador, setMostrarSelecionador] = useState(false);
  const [localBanner, setLocalBanner] = useState(bannerUrl || defaultBanner);
  const menuRef = useRef(null);
  const inputBannerRef = useRef(null);
  const { theme } = useTheme();
  const { fotoPerfil, setFotoPerfil } = useProfile();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuAberto(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTrocarBanner = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const urlTemporaria = URL.createObjectURL(file);
      setLocalBanner(urlTemporaria);
      setMenuAberto(false);
    } catch (err) {
      console.error("Erro ao enviar banner:", err);
    }
  };

  const menuClasse = `${styles.menuOpcoes} ${theme === "dark" ? styles.menuOpcoesDark : ""}`;

  return (
    <div className={styles.bannerPerfil} style={{ backgroundImage: `url(${localBanner})` }}>
      <PerfilCard nome={nome} isOwner={isOwner} />

      <div className={styles.menuWrapper} ref={menuRef}>
        <button className={styles.editarBanner} onClick={() => setMenuAberto(!menuAberto)}>
          <i className="ri-more-fill"></i>
        </button>

        {menuAberto && (
          <div className={menuClasse}>
            {isOwner ? (
              <>
                <button onClick={() => setMostrarSelecionador(true)}>
                  <i className="ri-edit-2-fill"></i> Trocar Foto de Perfil
                </button>
                <hr />
                <button onClick={() => inputBannerRef.current.click()}>
                  <i className="ri-edit-2-fill"></i> Trocar Banner do Perfil
                </button>
              </>
            ) : (
              <button>
                <i className="ri-flag-fill"></i> Denunciar Conta
              </button>
            )}
          </div>
        )}

        {isOwner && (
          <input
            type="file"
            accept="image/*"
            ref={inputBannerRef}
            style={{ display: "none" }}
            onChange={handleTrocarBanner}
          />
        )}
      </div>

      {mostrarSelecionador && (
        <SelecionarAvatar onClose={() => setMostrarSelecionador(false)} />
      )}
    </div>
  );
}