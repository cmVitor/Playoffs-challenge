import React from "react";
import { useState } from "react";
import Team from "./Team";

const MatchCard = ({ team1, team2 }) => {

    const [selectedTeam, setSelectedTeam] = useState(null);

    const handleSelect = (teamName) => {
        setSelectedTeam(teamName);
    };
    if (!team1 || !team2) {
        return <div className="match-card empty">Aguardando definição...</div>;
    }

    return (
        <div className="match-card">
            <Team 
                name={team1.name} 
                logo={team1.logo} 
                isSelected={selectedTeam === team1.name} 
                onSelect={() => handleSelect(team1.name)}
            />
            <span>x</span>
            <Team 
                name={team2.name} 
                logo={team2.logo} 
                isSelected={selectedTeam === team2.name} 
                onSelect={() => handleSelect(team2.name)}
            />
        </div>
    );
};

export default MatchCard;