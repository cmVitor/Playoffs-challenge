import React from "react";
import Column from "./Column";

const Bracket = ({ rounds }) => {
    return (
        <div className="bracket">

            {rounds.map((round, index) => (
                <Column key={`left-${index}`} phase={round.phase} matches={round.matches} />
            ))}
            {rounds.slice().reverse().slice(1).map((round, index) => (
                <Column key={`right-${index}`} phase={round.phase} matches={round.matches} />
            ))}
            
        </div>
    );
};

export default Bracket;
