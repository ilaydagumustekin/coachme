// component/MevcutProgram.js
import React from 'react';

const MevcutProgram = ({ program }) => {
    if (!program) {
        return <div>Program yükleniyor...</div>;
    }

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-bold text-gray-800 mb-2">{program.name}</h2>
            <p className="text-gray-600 mb-4">{program.description}</p>

            {program.exercises && (
                <>
                    <h3 className="text-md font-semibold text-gray-700 mb-2">Program Detayları:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {program.exercises.map((exercise, index) => (
                            <li key={index}>
                                <strong>{exercise.day}:</strong> {exercise.exercise}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default MevcutProgram;