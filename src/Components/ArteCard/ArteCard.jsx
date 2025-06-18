import styles from './ArteCard.module.css';
import { RiDownloadLine, RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri';
import { useSavedArtes } from '../../contexts/SavedArtesContext'; 

export default function ArteCard({ id, imagem, titulo, autor }) {
  const { savedArtes, toggleArte } = useSavedArtes();

  const isFavorita = savedArtes.some(arte => arte.id === id);

  const handleToggle = () => {
    toggleArte({ id, imagem, titulo, autor });
  };

  return (
    <div className={styles.card}>
      <img src={imagem} alt={titulo} className={styles.imagem} />
      <div className={styles.rodape}>
        <div>
          <p className={styles.titulo}>{titulo}</p>
          {autor && <span className={styles.autor}>por {autor}</span>}
        </div>
        <div className={styles.icones}>
          <a href={imagem} download title="Baixar imagem">
            <RiDownloadLine size={20} />
          </a>
          <button title="Salvar como favorito" onClick={handleToggle}>
            {isFavorita ? (
              <RiBookmarkFill size={20} />
            ) : (
              <RiBookmarkLine size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}