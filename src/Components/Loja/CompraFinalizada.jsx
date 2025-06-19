import styles from './LojaFinalizada.module.css';

export default function Toast({ mensagem }) {
  return (
    <div className={styles.carregamento}>
      {mensagem}
    </div>
  );
}