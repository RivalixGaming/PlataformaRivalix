import styles from "./PerfilCard.module.css";
import iconTeste from "../../assets/icon-teste-2.png";
import { useProfile } from "../../contexts/ProfileContext";

export default function PerfilCard({ nome, isOwner }) {
  const { fotoPerfil } = useProfile();

  const foto = fotoPerfil || iconTeste;

  return (
    <div className={styles.fotoContainer}>
      <img src={foto} alt={`Foto de ${nome}`} className={styles.foto} />
      <span className={styles.nome}>{nome}</span>
    </div>
  );
}
