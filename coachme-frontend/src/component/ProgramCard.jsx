import React from 'react';
import './ProgramCard.css';

const ProgramCard = ({ program, onSelect }) => {
    return (
        <div className="program-card" onClick={() => onSelect(program)}>
            <h3>{program.name}</h3>
            <p>Zorluk: {program.level}</p>
            <p>Süre: {program.duration} hafta</p>
        </div>
    );
};

export default ProgramCard;
