import styles from './ArtesSalvas.module.css';
import NavbarHome from '../../Components/HomeNavBar/NavBarHome';
import ArteCard from '../../Components/ArteCard/ArteCard';
import { useSavedArtes } from '../../contexts/SavedArtesContext'; 
import { Link } from 'react-router-dom';

export default function ArtesSalvasPage() {
  const { savedArtes, limparTodas } = useSavedArtes();

  return (
    <>
      <NavbarHome />
      <main className="main-content">
        <section className={styles.container}>
          <div className={styles.header}>
            <div>
              <h1 className={styles.titulo}>Artes Salvas</h1>
              <p className={styles.subtitulo}>
                Aqui ficam todas as artes que você marcou como favoritas.{' '}
                {!savedArtes.length && 'Salve artes na galeria da comunidade para vê-las aqui!'}
              </p>
            </div>

            <div className={styles.botoes}>
              <Link to="/galeria" className={styles.btnVoltar}>Voltar à Galeria</Link>
              {savedArtes.length > 0 && (
                <button onClick={limparTodas} className={styles.btnLimpar}>Limpar Tudo</button>
              )}
            </div>
          </div>

          <hr className={styles.divisor} />

          <div className={styles.gridGaleria}>
            {savedArtes.length > 0 ? (
              savedArtes.map((arte) => (
                <ArteCard key={arte.id} {...arte} isFavorited />
              ))
            ) : (
              <p className={styles.vazio}>Nenhuma arte salva ainda.</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}