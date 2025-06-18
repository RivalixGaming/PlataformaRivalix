import styles from './PostCard.module.css';
<<<<<<< HEAD
import { FaThumbsUp, FaCommentDots, FaShare } from "react-icons/fa";
=======
>>>>>>> 1ee056a30538b22297b67679ba2b5568b26e63c8
import { useTheme } from "../../contexts/ThemeContext";

export default function PostCard({ data }) {
  const { autor, avatar, imagem, legenda, verificado } = data;
<<<<<<< HEAD
=======

  const isVideo = (url) => {
    return url?.match(/\.(mp4|webm|ogg)$/i);
  };

>>>>>>> 1ee056a30538b22297b67679ba2b5568b26e63c8
   const { theme } = useTheme();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
        <div className={styles.info}>
          <span className={styles.nome}>{autor}</span>
          {verificado && <i className={`ri-verified-badge-fill ${styles.verificado}`}></i>}
        </div>
        <button className={styles.menu}><i className="ri-more-2-fill"></i></button>
      </div>

<<<<<<< HEAD
      {imagem && <img src={imagem} alt="Post" className={styles.imagemPost} />}

=======
      {imagem && (
        isVideo(imagem) ? (
          <video controls className={styles.imagemPost}>
            <source src={imagem} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        ) : (
          <img src={imagem} alt="Post" className={styles.imagemPost} />
        )
      )}
      
>>>>>>> 1ee056a30538b22297b67679ba2b5568b26e63c8
      <div className={styles.actions}>
        <button>< i class="ri-thumb-up-fill"></i></button>
        <button>< i class="ri-chat-3-fill"></i></button>
        <button>< i class="ri-send-plane-fill"></i></button>
      </div>

      <div className={styles.divisor}></div>

      {legenda && (
        <p className={styles.legenda}>
          {legenda}
        </p>
      )}
    </div>
  );
}
