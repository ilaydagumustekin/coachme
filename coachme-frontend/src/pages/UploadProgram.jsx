import React, { useState } from 'react';

const UploadProgram = () => {
    const [programName, setProgramName] = useState('');
    const [programDescription, setProgramDescription] = useState('');
    const [programFile, setProgramFile] = useState(null);

    // Formu göndermek için
    const handleSubmit = (e) => {
        e.preventDefault();

        // Burada form verilerini göndereceğiz, örneğin bir API'ye.
        const formData = new FormData();
        formData.append('programName', programName);
        formData.append('programDescription', programDescription);
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
