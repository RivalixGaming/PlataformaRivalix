
import style from "./TorneioVisaoGeral.module.css"


export default function TorneioVisaoGeral({ torneio }) {
  return (
    <div className={style.container_todo_detalhe_torneio}>
        <div className={style.container_detalhes_torneio}>
            <h2 className={style.titulo}>Detalhes</h2>
            <div className={style.detGrid}>
                <div><h4>Jogo</h4>           <p>{torneio.jogo}</p></div>
                <div><h4>Equipe</h4>         <p>{torneio.modalidade}</p></div>
                <div><h4>Formato</h4>        <p>{torneio.formato}</p></div>
                <div><h4>Tipo</h4>           <p>{torneio.tipo}</p></div>
                <div><h4>Início</h4>         <p>{torneio.data} {torneio.hora}</p></div>
                <div><h4>Prêmio Total</h4>   <p>R$ {torneio.premioTotal}</p></div>
                <div><h4>Entrada</h4>        <p>R$ {torneio.entradaValor}</p></div>
                <div><h4>Endereço</h4>       <p>{torneio.endereco}</p></div>
            </div>
      </div>

      {/* bloco de participantes / prêmio */}
      <div className={style.container_participantes}>
        <div className={style.container_informacoes_particpantes}>
          <h2>Participantes</h2>
          <p>
            <i className="ri-team-fill"></i>{" "}
            {torneio.totalVagas - torneio.vagasRestantes}/{torneio.totalVagas}
          </p>
          <div className={style.linha_participantes}></div>
          <h2>Prêmio</h2>
          <div className={style.premio_lugar}>
            <p>1º Lugar</p>
            <p>R$ {torneio.premioTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}