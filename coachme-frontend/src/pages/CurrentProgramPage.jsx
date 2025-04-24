import { useLocation } from 'react-router-dom';
import React from 'react';

const exampleProgram = {
    title: "Fit Başlangıç",
    description: "Yeni başlayanlar için ideal bir program.",
    difficulty: "Kolay",
    duration: 4,
    exercises: [
        { day: "Pazartesi", exercise: "Kardiyo - 30 dakika" },
        { day: "Çarşamba", exercise: "Vücut Ağırlığı ile Antrenman" },
        { day: "Cuma", exercise: "Esneme ve Nefes Egzersizleri" },
    ]
};

const CurrentProgramPage = () => {
    const location = useLocation();
    const joinedProgram = location.state?.program;

    // Eğer kullanıcı programa katılmadıysa örnek programı kullan
    const programToShow = joinedProgram || exampleProgram;

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Mevcut Programım</h1>


            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-2">{programToShow.title}</h2>
                <p className="text-gray-600 mb-2">{programToShow.description}</p>
                <p className="text-gray-600 mb-1"><strong>Zorluk:</strong> {programToShow.difficulty}</p>
                <p className="text-gray-600 mb-4"><strong>Süre:</strong> {programToShow.duration} hafta</p>

                {programToShow.exercises && (
                    <>
                        <h3 className="text-md font-semibold text-gray-700 mb-2">Program Detayları:</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            {programToShow.exercises.map((exercise, index) => (
                                <li key={index}>
                                    <strong>{exercise.day}:</strong> {exercise.exercise}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default CurrentProgramPage;
