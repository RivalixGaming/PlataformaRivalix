import { useProfile } from "../../contexts/ProfileContext";
import styles from "./SelecionarAvatar.module.css";
import { useState } from "react";
import avatar1 from "../../assets/avatars/avatar1.png";
import avatar2 from "../../assets/avatars/avatar2.png";
import avatar3 from "../../assets/avatars/avatar3.png"; 
import avatar4 from "../../assets/avatars/avatar4.png";
import avatar5 from "../../assets/avatars/avatar5.png";

const avataresPadrao = [
    { nome: "Hero", src: avatar1 },
    { nome: "DogBlue", src: avatar2 },
    { nome: "TheCreator", src: avatar3 },
    { nome: "Falko", src: avatar4 },
    { nome: "Capi", src: avatar5 },
];

export default function SelecionarAvatar({ onClose }) {
  const { setFotoPerfil } = useProfile();
  const [avatarSelecionado, setAvatarSelecionado] = useState(null);

  const handleSelecionar = (src) => {
    setFotoPerfil(src);
    onClose();
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setFotoPerfil(url);
    onClose();
  };

  return (
    <div className={styles.avatarModal}>
      <h3>Escolha seu Avatar</h3>

        <div className={styles.avatarGrid}>
            {avataresPadrao.map((avatar) => (
                <div
                    key={avatar.nome}
                    className={`${styles.avatarItem} ${
                        avatarSelecionado === avatar.src ? styles.selecionado : ""
                    }`}
                    onClick={() => handleSelecionar(avatar.src)}
                    >
                    <img src={avatar.src} alt={avatar.nome} className={styles.avatarImage} />
                    <span className={styles.avatarNome}>{avatar.nome}</span>
                </div>
            ))}
        </div>

      <div className={styles.uploadOpcao}>
        <label htmlFor="upload-foto" className={styles.uploadLabel}>
          <i className="ri-upload-2-line"></i> Upload de Imagem
          <input
            type="file"
            id="upload-foto"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
        </label>
      </div>

      <button className={styles.btnFechar} onClick={onClose}>
        Fechar
      </button>
    </div>
  );
}