import React from "react";
import PhaseCard from "./PhaseCard";
import MatchCard from "./MatchCard";

const Column = ({ phase, matches }) => {
    return (
        <div className="column">
            <div className="column-title"><PhaseCard phase={phase} /></div>
            {matches.map((match, index) => (
                <MatchCard key={index} team1={match.team1} team2={match.team2} />
            ))}
            <p>selecione o vencedor</p>
        </div>
    );
};

export default Column;
