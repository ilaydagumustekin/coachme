import React, { useState } from 'react';


const ProgramDetail = ({ program, onJoin, onChangeProgram, joinedProgram }) => {
    // Eğer program yoksa, component'i render etmiyoruz
    if (!program) return null;

    const handleProgramChange = () => {
        // Mevcut programı değiştirme fonksiyonunu tetikler
        onChangeProgram(program);
    };

    return (
        <div className="program-detail">
            <h2>{program.title}</h2>
            <p>Beslenme Planı: {program.nutrition}</p>
            <p>Antrenman Planı: {program.training}</p>
            <p>Zorluk: {program.difficulty}</p>
            <p>Süre: {program.duration} hafta</p>

            {/* Eğer kullanıcı bir programa katıldıysa, Programı Değiştir butonunu göster */}
            {joinedProgram ? (
                <div>
                    <button onClick={handleProgramChange}>Programı Değiştir</button>
                </div>
            ) : (
                <div>
                    <button onClick={onJoin}>Programa Katıl</button>
                </div>
            )}
        </div>
    );
};

export default ProgramDetail;

