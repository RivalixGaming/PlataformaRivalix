import styles from './ModalPlano.module.css';
import { useTheme } from '../../contexts/ThemeContext'; 

export default function ModalPlano({ plano, onConfirmar, onFechar }) {
  const { theme } = useTheme();

  if (!plano) return null;

  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${theme === 'dark' ? styles.dark : ''}`}>
        <h2>Confirmar Plano</h2>
        <p>Você selecionou o <strong>{plano.titulo}</strong>.</p>
        <p>Preço: <strong>{plano.preco}</strong></p>

        <div className={styles.botoes}>
          <button className={styles.cancelar} onClick={onFechar}>Cancelar</button>
          <button className={styles.confirmar} onClick={onConfirmar}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}