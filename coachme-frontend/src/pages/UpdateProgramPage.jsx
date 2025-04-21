import React, { useState } from 'react';
import './AdminDashboard.css'; // Stil dosyasını buraya ekledim
import './AddTrainerPages.css'; // Stil dosyasını buraya ekledim

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
        <div className="add-trainer-wrapper">
            <h1 className="text-3xl font-bold text-white mb-8">PROGRAM GÜNCELLE</h1>
            <form onSubmit={handleSubmit} className="add-trainer-form">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-lg font-medium mb-2 text-white">
                        Program Adı
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={programData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg mb-3"
                        placeholder="Program adı girin"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block text-lg font-medium mb-2 text-white">
                        Açıklama
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={programData.description}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg mb-3"
                        rows="4"
                        placeholder="Program açıklamasını girin"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="price" className="block text-lg font-medium mb-2 text-white">
                        Fiyat
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={programData.price}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg mb-3"
                        placeholder="Fiyat girin"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="duration" className="block text-lg font-medium mb-2 text-white">
                        Süre (gün)
                    </label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        value={programData.duration}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg mb-3"
                        placeholder="Program süresi girin"
                        required
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl shadow hover:bg-blue-700 transition"
                    >
                        Güncelle
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProgramPage;
