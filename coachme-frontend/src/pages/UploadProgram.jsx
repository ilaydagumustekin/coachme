import React, { useState } from 'react';

const UploadProgram = () => {
    const [programName, setProgramName] = useState('');
    const [programType, setProgramType] = useState('');
    const [programDescription, setProgramDescription] = useState('');
    const [level, setLevel] = useState('');
    const [duration, setDuration] = useState('');
    const [exercises, setExercises] = useState('');
    const [programFile, setProgramFile] = useState(null);

    // Formu göndermek için
    const handleSubmit = (e) => {
        e.preventDefault();

        // Burada form verilerini göndereceğiz, örneğin bir API'ye.
        const formData = new FormData();
        formData.append('programName', programName);
        formData.append('programType', programType);
        formData.append('programDescription', programDescription);
        formData.append('level', level);
        formData.append('duration', duration);
        formData.append('exercises', exercises);
        formData.append('programFile', programFile);

        // API'ye veri gönderme (örnek):
        // fetch('your-api-endpoint', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));

        alert('Program başarıyla yüklendi!');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8">Program Yükle</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
                <div className="mb-4">
                    <label htmlFor="programName" className="block text-sm font-medium text-gray-700">
                        Program Adı
                    </label>
                    <input
                        type="text"
                        id="programName"
                        value={programName}
                        onChange={(e) => setProgramName(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="programType" className="block text-sm font-medium text-gray-700">
                        Program Türü
                    </label>
                    <select
                        id="programType"
                        value={programType}
                        onChange={(e) => setProgramType(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md"
                    >
                        <option value="">Bir tür seçin</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Kardiyo">Kardiyo</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Ağırlık">Ağırlık</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="programDescription" className="block text-sm font-medium text-gray-700">
                        Program Açıklaması
                    </label>
                    <textarea
                        id="programDescription"
                        value={programDescription}
                        onChange={(e) => setProgramDescription(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700">
                        Başlangıç Seviyesi
                    </label>
                    <select
                        id="level"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md"
                    >
                        <option value="">Bir seviye seçin</option>
                        <option value="Başlangıç">Başlangıç</option>
                        <option value="Orta">Orta</option>
                        <option value="İleri">İleri</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                        Programın Süresi
                    </label>
                    <input
                        type="text"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="exercises" className="block text-sm font-medium text-gray-700">
                        İlgili Egzersizler
                    </label>
                    <textarea
                        id="exercises"
                        value={exercises}
                        onChange={(e) => setExercises(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="programFile" className="block text-sm font-medium text-gray-700">
                        Program Dosyasını Yükle
                    </label>
                    <input
                        type="file"
                        id="programFile"
                        onChange={(e) => setProgramFile(e.target.files[0])}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-3 px-6 rounded-xl shadow hover:bg-green-700 transition"
                    >
                        Program Yükle
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UploadProgram;
