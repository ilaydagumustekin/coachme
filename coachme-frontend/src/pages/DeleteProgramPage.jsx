import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8">Program Sil</h1>
            <div className="w-full max-w-lg">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                    Program ID
                </label>
                <input
                    type="text"
                    value={programId}
                    onChange={(e) => setProgramId(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                    placeholder="Program ID girin"
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                    onClick={handleDeleteProgram}
                    className="bg-red-600 text-white py-3 rounded-xl shadow hover:bg-red-700 transition"
                >
                    Programı Sil
                </button>
            </div>
        </div>
    );
};

export default DeleteProgramPage;
