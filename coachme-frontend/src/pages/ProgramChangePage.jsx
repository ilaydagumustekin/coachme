import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgramCard from '../component/ProgramCard';

const dummyPrograms = [
    { title: "Kas Geliştirme", difficulty: "Zor", duration: 8, description: "Yoğun kas yapma programı." },
    { title: "Fit Başlangıç", difficulty: "Orta", duration: 6, description: "Yeni başlayanlar için." },
    { title: "Zayıflama Programı", difficulty: "Kolay", duration: 4, description: "Kilo vermek isteyenler için." },
];

const ProgramChangePage = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [showAlternatives, setShowAlternatives] = useState(false);

    const navigate = useNavigate(); // ✅ navigate fonksiyonu tanımlandı

    const handleProgramSelect = (program) => {
        setSelectedProgram(program);
        setShowAlternatives(false);
    };

    const handleChangeProgram = () => {
        setShowAlternatives(true);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Programı Değiştir</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dummyPrograms.map((program, index) => (
                    <ProgramCard
                        key={index}
                        program={program}
                        onSelect={handleProgramSelect}
                        onChangeProgram={handleChangeProgram}
                    />
                ))}
            </div>

            {selectedProgram && !showAlternatives && (
                <div className="mt-8 p-4 border rounded bg-gray-100">
                    <h2 className="text-lg font-semibold mb-2">Seçilen Program: {selectedProgram.title}</h2>
                    <p>{selectedProgram.description}</p>

                    <button
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={handleChangeProgram}
                    >
                        Alternatif Programları Göster
                    </button>
                </div>
            )}

            {showAlternatives && (
                <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Alternatif Programlar</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {dummyPrograms
                            .filter(program => program.title !== selectedProgram?.title)
                            .map((program, index) => (
                                <ProgramCard
                                    key={index}
                                    program={program}
                                    onSelect={handleProgramSelect}
                                />
                            ))}
                    </div>

                    <div className="mt-6">
                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            onClick={() => navigate("/mevcut-program", { state: { program: selectedProgram } })}
                        >
                            Bu Programla Devam Et
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProgramChangePage;
