import React from "react";
import Column from "./Column";

const Bracket = ({ rounds }) => {
    // Pegamos a primeira rodada (Round of 16)
    const firstRound = rounds[0]; 
    const half = Math.ceil(firstRound.matches.length / 2);

    // Divide os jogos da primeira rodada
    const leftMatches = firstRound.matches.slice(0, half);
    const rightMatches = firstRound.matches.slice(half);

    // Todas as rodadas exceto a final
    const intermediateRounds = rounds.slice(1, -1);
    // Pega a final separadamente
    const finalRound = rounds[rounds.length - 1];

    return (
        <div className="bracket">
            {/* Coluna da esquerda (primeira metade dos jogos da primeira rodada) */}
            <Column key="left-16" phase={firstRound.phase} matches={leftMatches} />

            {/* Renderiza as rodadas intermediárias à esquerda */}
            {intermediateRounds.map((round, index) => (
                <Column key={`left-${index}`} phase={round.phase} matches={round.matches.slice(0, Math.ceil(round.matches.length / 2))} />
            ))}

            {/* Renderiza a Final no centro */}
            <Column key="final" phase={finalRound.phase} matches={finalRound.matches} />

            {/* Renderiza as rodadas intermediárias à direita (espelhadas) */}
            {[...intermediateRounds].reverse().map((round, index) => (
                <Column key={`right-${index}`} phase={round.phase} matches={round.matches.slice(Math.ceil(round.matches.length / 2))} />
            ))}

            {/* Coluna da direita (segunda metade dos jogos da primeira rodada) */}
            <Column key="right-16" phase={firstRound.phase} matches={rightMatches} />
        </div>
    );
};

export default Bracket;
