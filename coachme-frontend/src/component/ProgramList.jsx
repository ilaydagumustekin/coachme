import React from 'react';
import ProgramCard from './ProgramCard';  // ProgramCard'ı kullanacağız

const ProgramList = ({ programs, onSelect, joinedProgram, onChangeProgram }) => {
    return (
        <div>
            <h2>Önerilen Programlar</h2>
            {programs.map((program, index) => (
                <ProgramCard
                    key={index}
                    program={program}
                    onSelect={onSelect}
                    onChangeProgram={joinedProgram ? onChangeProgram : null} // Eğer kullanıcı bir programa katıldıysa, Programı Değiştir butonunu göster
                    progress={joinedProgram && joinedProgram.title === program.title ? 50 : null} // Eğer bu programda ilerleme varsa (örneğin %50)
                />
            ))}
        </div>
    );
};

export default ProgramList;
