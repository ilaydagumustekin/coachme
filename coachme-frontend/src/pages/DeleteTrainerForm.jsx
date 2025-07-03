import React, { useState } from "react";
import "./AdminDashboard.css";
import "./AddTrainerPages.css";

const apiUrl = process.env.REACT_APP_API_URL;

const DeleteTrainerForm = () => {
  const [trainerId, setTrainerId] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (!trainerId.trim()) {
      setError("Lütfen silmek istediğiniz eğitmenin ID'sini girin!");
      return;
    }

    if (!window.confirm("Bu eğitmeni silmek istediğinize emin misiniz?")) {
      return;
    }

    setLoading(true);

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Lütfen önce giriş yapın.");
      setLoading(false);
      return;
    }

    try {
      // Endpoint'i kendi backendine göre değiştir!
      const response = await fetch(
        `${apiUrl}/admin/users/${trainerId}/remove-trainer`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 204 || response.ok) {
        setSuccess("Eğitmen başarıyla silindi!");
        setTrainerId("");
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data.message || "Eğitmen silinemedi.");
      }
    } catch (err) {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    }
    setLoading(false);
  };

  return (
    <div className="add-trainer-wrapper">
      <h1 className="text-3xl font-bold text-white mb-8">EĞİTMEN SİL</h1>
      <form onSubmit={handleDelete} className="add-trainer-form">
        <input
          type="text"
          value={trainerId}
          onChange={(e) => setTrainerId(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3"
          placeholder="Eğitmen ID girin"
          required
        />
        {success && <div className="text-green-500 mb-3">{success}</div>}
        {error && <div className="text-red-500 mb-3">{error}</div>}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-xl shadow hover:bg-red-700 transition"
          disabled={loading}
        >
          {loading ? "Siliniyor..." : "Eğitmeni Sil"}
        </button>
      </form>
    </div>
  );
};

export default DeleteTrainerForm;
