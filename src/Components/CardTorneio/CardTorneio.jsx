import { Link } from "react-router-dom";
import styles     from "./CardTorneio.module.css";
import Padrao     from "../../assets/torneios/imagemTorneioPadrao.png";

export default function CardTorneio({
  id,
  titulo,
  foto,
  localizacao,
  modalidade,
  tipo,
  data,
  vagaRestante,
  vagaTotal,
  jogo,
}) {
  const total      = vagaTotal      || 1;
  const restante   = vagaRestante   || 0;
  const porcent    = ((total - restante) / total) * 100;
  const imagemSrc  = foto || Padrao;

  return (
    <Link key={id} to={`/torneios/${id}`} className={styles.container_card_perfil}>
      <img
        src={imagemSrc}
        alt={`Imagem do torneio ${titulo}`}
        className={styles.imagem_torneio_card}
      />

      <h3 className={styles.titulo_torneio_card}>{titulo}</h3>
      <p  className={styles.localizacao_torneio_card}>{jogo}</p>

      <div className={styles.categorias}>
        <p>{modalidade}</p>
        <p>{tipo}</p>
        <p>{data}</p>
      </div>

      <div className={styles.infos_extras}>
        <p>Vagas restantes: {vagaRestante}</p>

        <div className={styles.barra_de_conclusao}>
          <div
            className={styles.barra_de_conclusao_interna}
            style={{ width: `${porcent}%` }}
          />
        </div>

        <p className={styles.descricao_torneio_card}>{localizacao}</p>
      </div>
    </Link>
  );
}