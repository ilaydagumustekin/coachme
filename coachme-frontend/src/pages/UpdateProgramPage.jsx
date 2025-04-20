import React, { useState } from 'react';

const UpdateProgramPage = () => {
    const [programData, setProgramData] = useState({
        name: '',
        description: '',
        price: '',
        duration: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProgramData({
            ...programData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Program güncelleme işlemi burada yapılacak.
        // Bu örnekte sadece konsola yazdırıyoruz.
        console.log('Program Güncelleniyor: ', programData);

        // API ile bağlantı kurulup veriler güncellenebilir.
        // Örnek: axios.post('/api/update-program', programData);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8">Program Güncelle</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-semibold">Program Adı</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={programData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md mt-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg font-semibold">Açıklama</label>
                    <textarea
                        id="description"
                        name="description"
                        value={programData.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md mt-2"
                        rows="4"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-lg font-semibold">Fiyat</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={programData.price}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md mt-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="duration" className="block text-lg font-semibold">Süre (gün)</label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        value={programData.duration}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md mt-2"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition"
                >
                    Güncelle
                </button>
            </form>
        </div>
    );
};

export default UpdateProgramPage;
