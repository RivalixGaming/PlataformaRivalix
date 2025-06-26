import style from "./UserList.module.css";
import defaultAvatar from "/src/assets/icon-teste-2.png";

export default function UserList({ nome = "Nome do Usuário", pontos = 12345, avatar = defaultAvatar }) {
  return (
    <div className={style.user_card}>
      <div className={style.container_img_user_card}>
        <img src={avatar} alt={`Avatar de ${nome}`} className={style.user_avatar} />
      </div>
      <div className={style.user_card_header}>
        <h3 className={style.user_name}>{nome}</h3>
      </div>
      <div className={style.user_card_pontos}>
        <p className={style.user_score}>Pontuação: {pontos}</p>
      </div>
    </div>
  );
}