import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AdminDashboard.css';
import './AddTrainerPages.css';

const DeleteProgramPage = () => {
    const [programId, setProgramId] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Program silme işlevi
    const handleDeleteProgram = () => {
        if (!programId) {
            setError("Lütfen silmek istediğiniz programın ID'sini girin.");
            return;
        }

        // Burada backend'e bir istek göndererek programı silebilirsiniz
        // Örnek olarak sadece basit bir alert kullanıyoruz
        alert(`Program ID: ${programId} silindi.`);

        // Silme işlemi tamamlandığında admin paneline yönlendir
        navigate("/admin");
    };

    return (
        <div className="add-trainer-wrapper">
            <h1 className="text-3xl font-bold text-white mb-8">PROGRAM SİL</h1>
            <div className="add-trainer-form">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Program ID
                    </label>
                    <input
                        type="text"
                        value={programId}
                        onChange={(e) => setProgramId(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md"
                        placeholder="Program ID girin"
                    />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="flex justify-center">
                    <button
                        onClick={handleDeleteProgram}
                        className="bg-red-600 text-white py-3 px-6 rounded-xl shadow hover:bg-red-700 transition"
                    >
                        Programı Sil
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteProgramPage;
