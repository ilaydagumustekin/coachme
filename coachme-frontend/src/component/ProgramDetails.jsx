import React from 'react';

const ProgramDetail = ({ program, onJoin }) => {
    if (!program) return null;

    return (
        <div>
            <h2>{program.title}</h2>
            <p>Beslenme Planı: {program.nutrition}</p>
            <p>Antrenman Planı: {program.training}</p>
            <p>Zorluk: {program.difficulty}</p>
            <p>Süre: {program.duration} hafta</p>
            <button onClick={onJoin}>Programa Katıl</button>
        </div>
    );
};

export default ProgramDetail;
