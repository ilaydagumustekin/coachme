import React, { useState } from 'react';

const MevcutProgram = () => {
    // Örnek fitness programı
    const exampleProgram = {
        name: "Haftalık Fitness Programı",
        startDate: "2025-04-20",
        duration: 4,  // Haftalar
        description: "Bu program, kardiyo ve güç çalışmaları ile genel fitness seviyenizi artırmayı hedefler. Haftada 4 gün antrenman yaparak, hem kas gelişimi sağlanır hem de dayanıklılık artar.",
    };

    // Durum mesajı
    const [successMessage, setSuccessMessage] = useState('');

    // Program kaydedildiğinde mesaj gösterme
    const handleSaveProgram = () => {
        setSuccessMessage('Fitness programınız başarıyla kaydedildi!');
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Mevcut Programınız</h1>

            {/* Örnek Fitness Programı */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">{exampleProgram.name}</h2>
                <p className="text-gray-600 mb-2">Başlangıç Tarihi: {exampleProgram.startDate}</p>
                <p className="text-gray-600 mb-2">Süre: {exampleProgram.duration} hafta</p>
                <p className="text-gray-700 mb-4">{exampleProgram.description}</p>

                {/* Program kaydetme butonu */}
                <button
                    onClick={handleSaveProgram}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Programı Kaydet
                </button>
            </div>

            {/* Başarı mesajı */}
            {successMessage && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                    {successMessage}
                </div>
            )}
        </div>
    );
};

export default MevcutProgram;

