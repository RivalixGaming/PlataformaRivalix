import React, { useState } from 'react';
import style from './ModalCriarTorneio.module.css'; // Reutiliza o mesmo estilo

export default function ModalResetBracket({ isOpen, onClose, onConfirm }) {
  const [participants, setParticipants] = useState([]);
  const [currentParticipant, setCurrentParticipant] = useState('');

  const handleAddParticipant = () => {
    if (currentParticipant.trim() && participants.length < 8) {
      setParticipants([...participants, currentParticipant.trim()]);
      setCurrentParticipant('');
    }
  };

  const handleRemoveParticipant = (indexToRemove) => {
    setParticipants(participants.filter((_, index) => index !== indexToRemove));
  };

  const handleConfirmClick = () => {
    if (participants.length === 8) {
      onConfirm(participants);
      setParticipants([]); // Limpa para a próxima vez
      onClose();
    } else {
      alert('Por favor, adicione 8 participantes.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <button onClick={onClose} className={style.fechar}>X</button>
        <h2>Resetar Chave com Novos Participantes</h2>
        <div className={style.participantSection}>
          <h4>Adicione 8 novos participantes ({participants.length}/8)</h4>
          <div className={style.participantInputWrapper}>
            <input
              type="text"
              placeholder="Nome do novo participante"
              value={currentParticipant}
              onChange={(e) => setCurrentParticipant(e.target.value)}
              disabled={participants.length >= 8}
            />
            <button type="button" onClick={handleAddParticipant} disabled={participants.length >= 8}>
              Adicionar
            </button>
          </div>
          <ul className={style.participantList}>
            {participants.map((participant, index) => (
              <li key={index}>
                {participant}
                <button type="button" onClick={() => handleRemoveParticipant(index)}>X</button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleConfirmClick} disabled={participants.length !== 8}>
          Confirmar e Resetar Chave
        </button>
      </div>
    </div>
  );
}