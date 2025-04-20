import React from 'react';
import './ProgramCard.css';

const ProgramCard = ({ program, onSelect, onChangeProgram, progress }) => {
    return (
        <div className="program-card" onClick={() => onSelect(program)}>
            <h3>{program.title}</h3>
            <p>Zorluk: {program.difficulty}</p>
            <p>Süre: {program.duration} hafta</p>

            {progress !== null && (
                <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                </div>
            )}

            {/* Eğer kullanıcı bir programa katıldıysa, programı değiştirme butonu görünsün */}
            {onChangeProgram && (
                <button onClick={(e) => {
                    e.stopPropagation();  // Butona tıklarken card'a gitmesini engelle
                    onChangeProgram();
                }}>
                    Programı Değiştir
                </button>
            )}
        </div>
    );
};

export default ProgramCard;
