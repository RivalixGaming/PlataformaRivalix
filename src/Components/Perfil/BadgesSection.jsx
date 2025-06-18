import styles from "./BadgesSection.module.css";
import { useTheme } from "../../contexts/ThemeContext";
import badgePadrao from "../../assets/badge-default.png";

export default function BadgesPerfil({ badges = [] }) {
  const { theme } = useTheme();
  const temBadges = badges && badges.length > 0;
  const lista = temBadges ? badges : [{ img: badgePadrao, nome: "Novato" }];

  return (
    <div className={`${styles.badgeContainer} ${theme === "dark" ? styles.dark : ""}`}>
      <h2 className={styles.titulo}>Badges</h2>
      <div className={styles.listaBadges}>
        {lista.map((badge, index) => (
          <div key={index} className={styles.card}>
            <img src={badge.img} alt={badge.nome} className={styles.imagem} />
            <span className={styles.nome}>{badge.nome}</span>
          </div>
        ))}
      </div>
    </div>
  );
}