import styles from './Galeria.module.css';
import NavbarHome from '../../Components/HomeNavBar/NavBarHome';
import ArteCard from '../../Components/ArteCard/ArteCard';
import galeria1 from '../../assets/galeria1.png';
import { Link } from 'react-router-dom';

// artes aprovadas
const artes = [
  { id: 1, imagem: galeria1 , autor: 'Rivalix', titulo: 'Arte da Semana', data: '14/06/2025' },
  { id: 2, imagem: galeria1 , autor: 'Rivalix', titulo: 'Arte da Semana', data: '14/06/2025' },
  { id: 3, imagem: galeria1 , autor: 'Rivalix', titulo: 'Arte da Semana', data: '14/06/2025' },
  { id: 4, imagem: galeria1 , autor: 'Rivalix', titulo: 'Arte da Semana', data: '14/06/2025' },
];

export default function GaleriaPage() {
  return (
    <>
      <NavbarHome />
      <main className="main-content">
        <section className={styles.container}>
          <div className={styles.header}>
            <div>
              <h1 className={styles.titulo}>Galeria da Comunidade</h1>
              <p className={styles.subtitulo}>As melhores artes da comunidade estão aqui!<br />Toda semana na Rivalix.</p>
            </div >
            <div className={styles.botoes}>
              <Link to="https://discord.gg/seulink" target="_blank" className={styles.btnEnviar}>Envie a Sua!</Link>
              <Link to="/artes-salvas" className={styles.btnSalvas}>Artes Salvas</Link>
            </div>
          </div>
          <hr className={styles.divisor} />

          <div className={styles.gridGaleria}>
            {artes.map(arte => (
              <ArteCard key={arte.id} {...arte} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
