
import style from "./TorneioParticipantes.module.css"
import UserList from "../../Components/UserList/UserList"
import torneios from "../../data/torneios"

export default function TorneioParticipantes({torneio}) {

    const torn = torneios[torneio - 1]

    const quantidadeParticipantes = torn.totalVagas - torn.vagasRestantes

    console.log(quantidadeParticipantes)

    return(
        <>
            <div className={style.container_participantes}>
                <h2 style={{fontSize:"30px"}}>Participantes</h2>
                <div className={style.lista_participantes}>
                    {Array.from({ length:quantidadeParticipantes}).map((_, index) => (
                        <UserList key={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}
