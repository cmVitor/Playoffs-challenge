import React from "react";
import { useState } from "react";

const Team = ({ name, logo, isSelected, onSelect }) => {
    console.log(name, logo, isSelected, onSelect);

    return (
        <div className={`team-card ${isSelected ? "selected" : ""}`} onClick={onSelect}>
            <img src={logo} alt={name} className="team-logo" />
        </div>
    );
};

export default Team;
