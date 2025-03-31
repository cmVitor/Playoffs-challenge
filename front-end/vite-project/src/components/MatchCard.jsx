import React from "react";
import Team from "./Team";

const MatchCard = ({ team1, team2 }) => {
    return (
        <div className="match-card">
            <Team name={team1} />
            <span>Selecione o vencedor</span>
            <Team name={team2} />
        </div>
    );
};

export default MatchCard;