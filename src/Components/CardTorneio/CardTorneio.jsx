import { Link } from "react-router-dom";
import "./CardTorneio.css";
import Padrao from "../../assets/torneios/imagemTorneioPadrao.png"

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
  descricao,
}) {

  const total = vagaTotal || 1;
  const restante = vagaRestante || 0;
  const porcent = ((total - restante) / total) * 100;


  const imagemSrc = foto || Padrao; 

  return (
    <Link key={id} to={`/torneios/${id}`} className="container_card_perfil">
      <img
        src={imagemSrc}
        alt={`Imagem do torneio ${titulo}`}
        className="imagem_torneio_card"
      />

      <h2 className="titulo_torneio_card">{titulo}</h2>
      <p className="localizacao_torneio_card">{localizacao}</p>

      <div className="categorias">
        <p>{modalidade}</p>
        <p>{tipo}</p>
        <p>{data}</p>
      </div>

      <div className="infos_extras">
        <p>Vagas restantes: {vagaRestante}</p>
        <div className="barra_de_conclusao">
          <div
            style={{ width: `${porcent}%` }}
            className="barra_de_conclusao_interna"
          ></div>
        </div>
        <p className="descricao_torneio_card">{descricao}</p>
      </div>
    </Link>
  );
}