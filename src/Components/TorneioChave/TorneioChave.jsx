import React, { useState, useEffect } from 'react';
import style from './TorneioChave.module.css';
import MatchModal from '../Torneio/MatchModal';
import ModalResetBracket from '../Torneio/ModalResetBracket';

// Lista de jogadores padrão (fallback)
const playerNames = [
    "Zephyr", "Raze", "Vortex", "Jett",
    "Kael", "Nyx", "Stryker", "Cypher"
];

// Função para gerar a estrutura da bracket a partir de uma lista de jogadores 
function generateBracket(players) {

    if (!players || players.length === 0) {
        return [{ title: 'Quartas de Final', matches: [] }];
    }

    const initialRounds = [
        { title: 'Quartas de Final', matches: [] },
        { title: 'Semifinais', matches: [] },
        { title: 'Final', matches: [] },
        { title: 'Campeão', matches: [{ id: 8, player1: null, player2: null, winner: null, nextMatchId: null }] }
    ];
    let matchId = 1;
    let nextMatchIdCounter = 5;
    for (let i = 0; i < players.length; i += 2) {
        initialRounds[0].matches.push({ id: matchId, player1: players[i], player2: players[i + 1], winner: null, nextMatchId: nextMatchIdCounter });
        if (i % 4 === 2) { nextMatchIdCounter++; }
        matchId++;
    }
    initialRounds[1].matches.push({ id: 5, player1: null, player2: null, winner: null, nextMatchId: 7 });
    initialRounds[1].matches.push({ id: 6, player1: null, player2: null, winner: null, nextMatchId: 7 });
    initialRounds[2].matches.push({ id: 7, player1: null, player2: null, winner: null, nextMatchId: 8 });
    return initialRounds;
}

//  Utilizando os dados do torneio que foi criado para gerar a bracket
export default function TorneioChave({ torneio, onBracketReset }) {

    const [rounds, setRounds] = useState(() => {
        // Esta função de inicialização só roda uma vez, quando o componente é criado
        const savedBracket = localStorage.getItem(`rivalixBracket_${torneio.id}`);
        if (savedBracket) {
            return JSON.parse(savedBracket);
        }
        const players = (torneio.participantes && torneio.participantes.length > 0)
            ? torneio.participantes
            : playerNames;
        return generateBracket(players);
    });
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedMatch, setSelectedMatch] = useState(null);
    
    const [isResetModalOpen, setIsResetModalOpen] = useState(false); 

    useEffect(() => {
        localStorage.setItem(`rivalixBracket_${torneio.id}`, JSON.stringify(rounds));
    }, [rounds, torneio.id]);
    
    const handleOpenModal = (roundIndex, matchIndex) => {
        setSelectedMatch({ ...rounds[roundIndex].matches[matchIndex], roundIndex, matchIndex });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMatch(null);
    };

    const handleConfirmWinner = (winner) => {
        if (!selectedMatch) return;
        const { roundIndex, matchIndex } = selectedMatch;

        const newRounds = JSON.parse(JSON.stringify(rounds));
        const currentMatch = newRounds[roundIndex].matches[matchIndex];
        currentMatch.winner = winner;

        const nextRoundIndex = roundIndex + 1;
        if (newRounds[nextRoundIndex]) {
            const nextMatch = newRounds[nextRoundIndex].matches.find(m => m.id === currentMatch.nextMatchId);
            if (nextMatch) {
                if (nextMatch.player1 === null) nextMatch.player1 = winner;
                else nextMatch.player2 = winner;
            }
        }
        setRounds(newRounds);
        handleCloseModal();
    };

    const handleReset = () => {
        // Abrindo o novo modal
        setIsResetModalOpen(true);
    };

    // Cria uma nova função para quando o modal de reset for confirmado
    const handleConfirmReset = (newPlayers) => {
        // Atualiza o objeto do torneio no localStorage geral com os novos participantes
        const todosOsTorneios = JSON.parse(localStorage.getItem('torneiosRivalix') || '[]');
        const torneioIndex = todosOsTorneios.findIndex(t => t.id === torneio.id);
        if (torneioIndex !== -1) {
            todosOsTorneios[torneioIndex].participantes = newPlayers;
            localStorage.setItem('torneiosRivalix', JSON.stringify(todosOsTorneios));
        }

        // Gera a nova bracket com os novos jogadores e atualiza o estado
        const novaBracket = generateBracket(newPlayers);
        setRounds(novaBracket);

        // Avisa o componente Pai para se atualizar
        if (onBracketReset) {
            onBracketReset();
        }
    };

    return (
        <>
            <div className={style.container_chaves}>
                <h2 style={{ fontSize: '30px' }}>Chave de torneio</h2>
                <div className={style.bracket}>
                    {rounds.map((round, roundIndex) => (
                        <div className={style.round} key={round.title}>
                            <h3>{round.title}</h3>
                            {round.matches.map((match, matchIndex) => {
                                const isPlayable = match.player1 && match.player2 && !match.winner;

                                const isChampionRound = round.title === 'Campeão';

                                if (isChampionRound) {
                                    // Se for o round do campeão, renderiza este bloco especial
                                    return (
                                        <div className={`${style.match} ${style.champion}`} key={match.id}>
                                            <div className={style.championTitle}>CAMPEÃO</div>
                                            <div className={style.championName}>{match.player1 || 'A definir'}</div>
                                        </div>
                                    );
                                }

                                return (
                                    <div
                                        className={`${style.match} ${isPlayable ? style.playable : ''}`}
                                        key={match.id}
                                        onClick={() => isPlayable && handleOpenModal(roundIndex, matchIndex)}
                                    >
                                        <div className={style.player}>{match.player1 || 'A definir'}</div>
                                        <div className={style.vs}>vs</div>
                                        <div className={style.player}>{match.player2 || 'A definir'}</div>
                                        {match.winner && (
                                            <div className={style.winner}>Vencedor: {match.winner}</div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <button onClick={handleReset} className={style.resetButton}>Resetar Torneio</button>
            </div>
            <MatchModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                match={selectedMatch}
                onConfirmWinner={handleConfirmWinner}
            />

            <ModalResetBracket
                isOpen={isResetModalOpen}
                onClose={() => setIsResetModalOpen(false)}
                onConfirm={handleConfirmReset}
            />
        </>
    );
}