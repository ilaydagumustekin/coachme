// src/pages/CurrentProgramPage.jsx
import React from 'react';
import MevcutProgram from '../component/MevcutProgram';

const CurrentProgramPage = () => {
    // Geçici olarak sabit veri, sonra backend'den gelecek
    const joinedProgram = {
        name: "Fit Başlangıç Programı",
        startDate: "2025-04-15",
        duration: 6,
        description: "Yeni başlayanlar için spor ve beslenme programı.",
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Mevcut Program</h1>
            <MevcutProgram program={joinedProgram} />
        </div>
    );
};

export default CurrentProgramPage;
