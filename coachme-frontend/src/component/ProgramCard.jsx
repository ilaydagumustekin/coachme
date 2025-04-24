import React from 'react';
import './ProgramCard.css';

const ProgramCard = ({ program, onSelect, onChangeProgram }) => {
    return (
        <div className="program-card" onClick={() => onSelect(program)}>
            <h3>{program.title}</h3>
            <p>Zorluk: {program.difficulty}</p>
            <p>Süre: {program.duration} hafta</p>

            {/* Eğer kullanıcı program değiştirmek isterse, buton görünsün */}
            {onChangeProgram && (
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Butona tıklarken card'a gitmesini engelle
                        onChangeProgram(); // Program değiştirme işlemine git
                    }}
                    className="mt-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                >
                    Programı Değiştir
                </button>
            )}
        </div>
    );
};

export default ProgramCard;
