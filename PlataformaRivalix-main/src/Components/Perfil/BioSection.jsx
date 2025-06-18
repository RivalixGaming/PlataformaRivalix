import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./BioSection.module.css";

export default function BioSection({ isOwner, bio: bioProp }) {
  const { theme } = useTheme();
  const [editando, setEditando] = useState(false);
  const [bio, setBio] = useState(bioProp || "");
  const [novaBio, setNovaBio] = useState(bioProp || "");

  const salvar = () => {
    setBio(novaBio);
    setEditando(false);
  };

  const cancelar = () => {
    setNovaBio(bio);
    setEditando(false);
  };

  const placeholder = "Este jogador ainda não escreveu uma bio personalizada.";

  return (
    <div className={`${styles.bioContainer} ${theme === "dark" ? styles.dark : ""}`}>
      {isOwner && !editando && (
        <button className={styles.editIcon} onClick={() => setEditando(true)}>
          <i className="ri-edit-2-line"></i>
        </button>
      )}

      <h2 className={styles.titulo}>Sobre</h2>

      {editando ? (
        <>
          <textarea
            value={novaBio}
            onChange={(e) => setNovaBio(e.target.value)}
            className={styles.textarea}
          />
          <div className={styles.botoes}>
            <button className={styles.btnSalvar} onClick={salvar}>
              <i className="ri-check-line"></i>
            </button>
            <button className={styles.btnCancelar} onClick={cancelar}>
              <i className="ri-close-line"></i>
            </button>
          </div>
        </>
      ) : (
        <p className={styles.bioTexto}>
          {bio.trim() !== "" ? bio : placeholder}
        </p>
      )}
    </div>
  );
}