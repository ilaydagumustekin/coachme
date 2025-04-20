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
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Mevcut Program</h1>

            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">{joinedProgram.name}</h2>
                <p className="text-gray-600 mb-2">
                    <strong>Başlangıç Tarihi: </strong> {joinedProgram.startDate}
                </p>
                <p className="text-gray-600 mb-2">
                    <strong>Süre: </strong> {joinedProgram.duration} hafta
                </p>
                <p className="text-gray-600 mb-4">
                    <strong>Açıklama: </strong> {joinedProgram.description}
                </p>

                <MevcutProgram program={joinedProgram} />
            </div>
        </div>
    );
};

export default CurrentProgramPage;
