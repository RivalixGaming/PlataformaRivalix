import torneios from "../../data/torneios";
import style from "./TorneioVisaoGeral.module.css"


export default function TorneioVisaoGeral({torneio}) {

    const torn = torneios[torneio-1]

    return(
        <>
                

            <div className={style.container_todo_detalhe_torneio}>
                <div className={style.container_detalhes_torneio}>
                    <h2 style={{paddingBottom:"30px", fontSize:"30px", width:"100%"}}>Detalhes</h2>
                    <div>
                        <h4>jogo</h4>
                        <p>{torn.jogo}</p>
                    </div>
                    <div>
                        <h4>Equipe</h4>
                        <p>{torn.modalidade}</p>
                    </div>
                    <div>
                        <h4>Formato</h4>
                        <p>{torn.formato}</p>
                    </div>
                    <div>
                        <h4>Tipo</h4>
                        <p>{torn.tipo}</p>
                    </div>
                    <div>
                        <h4>Inicio</h4>
                        <p>{torn.data}</p>
                        <p>{torn.hora}</p>
                    </div>
                    <div>
                        <h4>Prêmio Total</h4>
                        <p>R$ {torn.premioTotal},00</p>
                    </div>
                    <div>
                        <h4>Entrada</h4>
                        <p>R$ {torn.entradaValor},00</p>
                    </div>
                    <div>
                        <h4>Endereço</h4>
                        <p>{torn.endereco}</p>
                    </div>
                </div>
                <div className={style.container_participantes}>
                    <div className={style.container_informacoes_particpantes}> 
                        <h2>Participantes</h2>
                        <p><i class="ri-team-fill"></i> {torn.totalVagas - torn.vagasRestantes}/{torn.totalVagas}</p>
                        <div className={style.linha_participantes}></div>
                        <h2>Prêmio</h2>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p>1º Lugar</p>
                            <p>R$ {torn.premioTotal},00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}