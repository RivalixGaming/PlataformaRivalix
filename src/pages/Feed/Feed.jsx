import PostCard from "../../Components/Feed/PostCard";
import styles from "./Feed.module.css";
import NavbarHome from "../../Components/HomeNavBar/NavBarHome.jsx";
import { useTheme } from '../../contexts/ThemeContext'; 
import post1 from '../../assets/feed/1.png';
import post2 from '../../assets/feed/2.png';
import post3 from '../../assets/feed/3.png';
import post4 from '../../assets/feed/4.png';
import rivalix from "../../assets/LogoSolo.png";
import Comercial from "../../assets/Comercial.Rivalix.mp4";

export default function FeedPage() {
  const { theme } = useTheme(); 

  const posts = [
    {
      autor: "RIVALIX",
      avatar: rivalix,
      imagem:  post1,
      legenda: "Tem torneio rolando em nosso stand no demoday! Venha participar e ganhe um chaveiro de brinde!",
      verificado:true
    },
    {
      autor: "RIVALIX",
      avatar: rivalix,
      imagem:  post4,
      legenda: "Os avatares dos membros da equipe Rivalix estão disponíveis! Personalize seu perfil!",
      verificado:true
    },
    {
      autor: "RIVALIX",
      avatar: rivalix,
      imagem:  post2,
      legenda: "Siga @rivalix.oficial no instagram e acesse nosso dossiê para conhecer mais o projeto!",
      verificado:true
    },
    {
      autor: "RIVALIX",
      avatar: rivalix,
      imagem:  post3,
      legenda: "Conheça a equipe por trás da Rivalix! Estamos aqui para transformar a rivalidade em palco.",
      verificado:true
    },
    {
      autor: "RIVALIX",
      avatar: rivalix,
      imagem:  Comercial,
      legenda: "A Rivalidade se transforma em palco. Bem-vindo à Rivalix.",
      verificado:true
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