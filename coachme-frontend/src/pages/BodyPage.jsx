import React, { useState } from 'react';

const BodyMeasurementsPage = () => {
    // State'ler
    const [chest, setChest] = useState('');
    const [waist, setWaist] = useState('');
    const [hips, setHips] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Form gönderildiğinde çalışacak fonksiyon
    const handleSubmit = (e) => {
        e.preventDefault();

        // Verilerin kaydedildiğini simüle etmek
        setSuccessMessage('Beden ölçüsü bilgileri başarıyla kaydedildi!');

        // Formu sıfırlamak (isteğe bağlı)
        setChest('');
        setWaist('');
        setHips('');
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Beden Ölçüsü Bilgileri</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="chest" className="block text-sm font-medium text-gray-700">Göğüs Çevresi (cm)</label>
                    <input
                        type="number"
                        id="chest"
                        name="chest"
                        value={chest}
                        onChange={(e) => setChest(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="waist" className="block text-sm font-medium text-gray-700">Bel Çevresi (cm)</label>
                    <input
                        type="number"
                        id="waist"
                        name="waist"
                        value={waist}
                        onChange={(e) => setWaist(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="hips" className="block text-sm font-medium text-gray-700">Kalça Çevresi (cm)</label>
                    <input
                        type="number"
                        id="hips"
                        name="hips"
                        value={hips}
                        onChange={(e) => setHips(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Bilgileri Kaydet
                </button>
            </form>

            {/* Başarı mesajı */}
            {successMessage && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                    {successMessage}
                </div>
            )}
        </div>
    );
};

export default BodyMeasurementsPage;
