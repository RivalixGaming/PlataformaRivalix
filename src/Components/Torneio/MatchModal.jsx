import React from 'react';
import style from './MatchModal.module.css'; // Usando CSS Modules

function MatchModal({ match, isOpen, onClose, onConfirmWinner }) {
  // Se o modal não estiver aberto ou não houver partida, não renderize nada
  if (!isOpen || !match) {
    return null;
  }

  return (
    // O fundo escurecido do modal
    <div className={style.modalOverlay} onClick={onClose}>
      {/* O conteúdo do modal */}
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Confirmar Resultado</h2>
        <p>Quem venceu a partida?</p>
        
        <div className={style.matchInfo}>
          <span className={style.playerName}>{match.player1}</span>
          <span className={style.vs}>vs</span>
          <span className={style.playerName}>{match.player2}</span>
        </div>

        <div className={style.modalActions}>
          <button 
            className={style.winnerButton}
            onClick={() => onConfirmWinner(match.player1)}
          >
            {match.player1} venceu
          </button>
          <button 
            className={style.winnerButton}
            onClick={() => onConfirmWinner(match.player2)}
          >
            {match.player2} venceu
          </button>
        </div>

        <button className={style.closeButton} onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default MatchModal;