import React from 'react';

const MevcutProgram = ({ program }) => {
    if (!program) {
        return <p>Henüz bir programa katılmadınız.</p>;
    }

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{program.name}</h2>
            <p className="text-gray-600 mb-2">Başlangıç Tarihi: {program.startDate}</p>
            <p className="text-gray-600 mb-2">Süre: {program.duration} hafta</p>
            <p className="text-gray-700">{program.description}</p>
        </div>
    );
};

export default MevcutProgram;
