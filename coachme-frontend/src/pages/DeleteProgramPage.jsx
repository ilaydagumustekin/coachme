import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import "./AddTrainerPages.css";

const apiUrl = process.env.REACT_APP_API_URL;

const DeleteProgramPage = () => {
  const [programId, setProgramId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Program silme işlevi
  const handleDeleteProgram = async () => {
    setError("");
    if (!programId) {
      setError("Lütfen silmek istediğiniz programın ID'sini girin.");
      return;
    }

    if (!window.confirm("Programı silmek istediğinize emin misiniz?")) {
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Lütfen önce giriş yapın.");
        setLoading(false);
        return;
      }

      const response = await fetch(`${apiUrl}/admin/programs/${programId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 204 || response.ok) {
        alert("Program başarıyla silindi.");
        navigate("/admin");
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data.message || "Program silinemedi.");
      }
    } catch (err) {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    }
    setLoading(false);
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
            disabled={loading}
            className="bg-red-600 text-white py-3 px-6 rounded-xl shadow hover:bg-red-700 transition"
          >
            {loading ? "Siliniyor..." : "Programı Sil"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProgramPage;
