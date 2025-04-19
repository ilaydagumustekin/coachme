import React from 'react';

const ProgramList = ({ programs, onSelect }) => {
    return (
        <div>
            <h2>Önerilen Programlar</h2>
            {programs.map((program, index) => (
                <div key={index} onClick={() => onSelect(program)} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
                    <h3>{program.title}</h3>
                    <p>Zorluk: {program.difficulty}</p>
                    <p>Süre: {program.duration} hafta</p>
                </div>
            ))}
        </div>
    );
};

export default ProgramList;