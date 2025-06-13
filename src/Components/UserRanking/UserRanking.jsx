import './UserRanking.css';
import defaultAvatar from '../../assets/icon-teste-2.png';

export default function UserCard({ nome = "Nome do Usuário", pontos = 12345, avatar = defaultAvatar }) {
  return (
    <div className="user-card">
      <div className="container-img-user-card">
        <img src={avatar} alt={`Avatar de ${nome}`} className="user-avatar" />
      </div>
      <div className="user-card-header">
        <h3 className="user-name">{nome}</h3>
      </div>
      <div className="user-card-pontos">
        <p className="user-score">Pontuação: {pontos}</p>
      </div>
    </div>
  );
}