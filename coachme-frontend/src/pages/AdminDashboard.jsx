import React from "react";
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    // "Eğitmen Ekle" butonuna tıklandığında kullanıcıyı eğitmen ekleme sayfasına yönlendir
    const handleAddTrainerClick = () => {
        navigate('/admin/add-trainer');
    };

    // "Eğitmen Sil" butonuna tıklandığında kullanıcıyı eğitmen silme sayfasına yönlendir
    const handleDeleteTrainerClick = () => {
        navigate('/admin/delete-trainer');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8">Yönetici Paneli</h1>
            <div className="grid grid-cols-2 gap-6 w-full max-w-xl">
                <button
                    onClick={handleAddTrainerClick}
                    className="bg-blue-600 text-white py-3 rounded-xl shadow hover:bg-blue-700 transition"
                >
                    Eğitmen Ekle
                </button>
                <button
                    onClick={handleDeleteTrainerClick}
                    className="bg-red-600 text-white py-3 rounded-xl shadow hover:bg-red-700 transition"
                >
                    Eğitmen Sil
                </button>
                <button className="bg-yellow-500 text-white py-3 rounded-xl shadow hover:bg-yellow-600 transition">Fiyat Güncelle</button>
                <button className="bg-green-600 text-white py-3 rounded-xl shadow hover:bg-green-700 transition">Program Yükle</button>
                <button className="bg-red-500 text-white py-3 rounded-xl shadow hover:bg-red-600 transition">Program Sil</button>
                <button className="bg-indigo-600 text-white py-3 rounded-xl shadow hover:bg-indigo-700 transition">Program Güncelle</button>
            </div>
        </div>
    );
};

export default AdminDashboard;
