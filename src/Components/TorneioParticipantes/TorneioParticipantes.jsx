
import style from "./TorneioParticipantes.module.css"
import UserList from "../../Components/UserList/UserList"
import torneios from "../../data/torneios"

export default function TorneioParticipantes({ torneio }) {
  const quantidade = torneio.totalVagas - torneio.vagasRestantes;

  return (
    <div className={style.container_participantes}>
      <h2 className={style.titulo}>Participantes</h2>

      <div className={style.lista_participantes}>
        {Array.from({ length: quantidade }).map((_, i) => (
          <UserList key={i} />
        ))}
      </div>
    </div>
  );
}