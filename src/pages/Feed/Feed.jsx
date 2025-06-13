import PostCard from "../../Components/Feed/PostCard";
import styles from "./Feed.module.css";
import NavbarHome from "../../Components/HomeNavBar/NavBarHome.jsx";
import { useTheme } from '../../contexts/ThemeContext'; // CORRETO AQUI
import bannerExemplo from "../../assets/defaultBanner.png";
import rivalix from "../../assets/LogoSolo.png";

export default function FeedPage() {
  const { theme } = useTheme(); // pega tema atual

  const posts = [
    {
      autor: "RIVALIX",
      avatar: rivalix,
      imagem: bannerExemplo,
      legenda: "Entre na arena...",
      verificado: true
    },
    {
      autor: "JuiceFruit",
      avatar: rivalix,
      imagem: "",
      legenda: "Em breve uma nova competição vem aí!",
      verificado: true
    },
  ];

  return (
    <>
      <NavbarHome />
      <main className="main-content">
        <article className={`${styles.feedWrapper} ${styles[theme]}`}>
          <div className={styles.listaPosts}>
            {posts.map((post, index) => (
              <PostCard key={index} data={post} />
            ))}
          </div>
        </article>
      </main>
    </>
  );
}