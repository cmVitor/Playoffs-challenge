import React from "react";
import Column from "./Column";

const Bracket = ({ rounds }) => {
    return (
        <div className="bracket">

            {rounds.map((round, index) => (
                <Column key={index} phase={round.phase} matches={round.matches} />
            ))}
        </div>
    );
};

export default Bracket;
