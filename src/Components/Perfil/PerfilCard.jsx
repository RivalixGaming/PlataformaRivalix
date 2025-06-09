import styles from "./PerfilCard.module.css";
import iconTeste from "../../assets/icon-teste-2.png";

export default function PerfilCard({ fotoUrl, nome, isOwner }) {
  const foto = fotoUrl || iconTeste;

  return (
    <div className={styles.fotoContainer}>
      <img src={foto} alt={`Foto de ${nome}`} className={styles.foto} />
      <span className={styles.nome}>{nome}</span>
    </div>
  );
}
