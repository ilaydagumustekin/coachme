import React from "react";
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleAddTrainerClick = () => {
        navigate('/admin/add-trainer');
    };

    const handleDeleteTrainerClick = () => {
        navigate('/admin/delete-trainer');
    };

    const handleUpdatePriceClick = () => {
        navigate('/admin/update-price');
    };

    const handleUploadProgramClick = () => {
        navigate('/admin/upload-program');
    };

    const handleDeleteProgramClick = () => {
        navigate('/admin/delete-program');
    };

    const handleUpdateProgramClick = () => {
        navigate('/admin/update-program');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8">Yönetici Paneli</h1>
            <div className="grid grid-cols-2 gap-6 w-full max-w-xl">
                <button
                    onClick={handleAddTrainerClick}
                    className="bg-red-600 text-white py-3 rounded-xl shadow hover:bg-red-700 transition"
                >
                    Eğitmen Ekle
                </button>
                <button
                    onClick={handleDeleteTrainerClick}
                    className="bg-red-600 text-white py-3 rounded-xl shadow hover:bg-red-700 transition"
                >
                    Eğitmen Sil
                </button>
                <button
                    onClick={handleUpdatePriceClick}
                    className="bg-red-600 text-white py-3 rounded-xl shadow hover:bg-red-700 transition"
                >
                    Fiyat Güncelle
                </button>
                <button
                    onClick={handleUploadProgramClick}
                    className="bg-red-600 text-white py-3 rounded-xl shadow hover:bg-red-700 transition"
                >
                    Program Yükle
                </button>
                <button
                    onClick={handleDeleteProgramClick}
                    className="bg-red-600 text-white py-3 rounded-xl shadow hover:bg-red-700 transition"
                >
                    Program Sil
                </button>
                <button
                    onClick={handleUpdateProgramClick}
                    className="bg-red-600 text-white py-3 rounded-xl shadow hover:bg-red-700 transition"
                >
                    Program Güncelle
                </button>
            </div>
        </div>
    );
};

export default AdminDashboard;
