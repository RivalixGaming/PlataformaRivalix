import PostCard from "../../Components/Feed/PostCard";
import styles from "./Feed.module.css";
import NavbarHome from "../../Components/HomeNavBar/NavBarHome.jsx";
<<<<<<< HEAD
import { useTheme } from '../../contexts/ThemeContext'; // CORRETO AQUI
import bannerExemplo from "../../assets/defaultBanner.png";
import rivalix from "../../assets/LogoSolo.png";

export default function FeedPage() {
  const { theme } = useTheme(); // pega tema atual
=======
import { useTheme } from '../../contexts/ThemeContext'; 
import bannerExemplo from "../../assets/defaultBanner.png";
import rivalix from "../../assets/LogoSolo.png";
import Comercial from "../../assets/Comercial.Rivalix.mp4";

export default function FeedPage() {
  const { theme } = useTheme(); 
>>>>>>> 1ee056a30538b22297b67679ba2b5568b26e63c8

  const posts = [
    {
      autor: "RIVALIX",
      avatar: rivalix,
<<<<<<< HEAD
=======
      imagem:  Comercial,
      legenda: "A Rivalidade se transforma em palco. Bem-vindo à Rivalix.",
      verificado:true
    },
    {
      autor: "RIVALIX",
      avatar: rivalix,
>>>>>>> 1ee056a30538b22297b67679ba2b5568b26e63c8
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