import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgramList from '../component/ProgramList';

const ProgramChangePage = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);

    const handleProgramSelect = (program) => {
        setSelectedProgram(program);
    };

    return (
        <div>
            <h1>Programı Değiştir</h1>
            <ProgramList onSelectProgram={handleProgramSelect} />

            {selectedProgram && (
                <div>
                    <h3>Seçilen Program: {selectedProgram.name}</h3>
                    <Link to="/current-program">
                        <button onClick={() => alert('Yeni program kaydedildi.')}>Onayla</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ProgramChangePage;
