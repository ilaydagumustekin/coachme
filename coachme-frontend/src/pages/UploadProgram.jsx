import React, { useState } from "react";
import "./AdminDashboard.css";
import "./AddTrainerPages.css";

const apiUrl = process.env.REACT_APP_API_URL;

const UploadProgram = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [weeks, setWeeks] = useState("");
  const [price, setPrice] = useState("");
  // Planı şimdilik dummy gönderiyoruz
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Giriş yapmanız gerekmektedir.");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        name,
        description,
        difficulty,
        duration: Number(duration),
        weeks: Number(weeks),
        price: Number(price),
        plan: [
          {
            week: 1,
            day: 1,
            exercise: "Squat",
            sets: "4",
            reps: "12",
            notes: "Isınma sonrası başla",
          },
        ],
      };

      const response = await fetch(`${apiUrl}/admin/programs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Program yüklenemedi.");
      } else {
        setSuccess("Program başarıyla yüklendi!");
        // Formu sıfırla
        setName("");
        setDescription("");
        setDifficulty("");
        setDuration("");
        setWeeks("");
        setPrice("");
      }
    } catch (err) {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-trainer-wrapper">
      <h1 className="text-3xl font-bold text-white mb-8">PROGRAM YÜKLE</h1>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {success && (
        <p style={{ color: "green", textAlign: "center" }}>{success}</p>
      )}

      <form onSubmit={handleSubmit} className="add-trainer-form">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Program Adı
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Program Açıklaması
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Zorluk Seviyesi
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">Seçiniz</option>
            <option value="Başlangıç">Başlangıç</option>
            <option value="Orta Seviye">Orta Seviye</option>
            <option value="İleri Seviye">İleri Seviye</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Süre (dk)
          </label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
            min="1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Hafta Sayısı
          </label>
          <input
            type="number"
            value={weeks}
            onChange={(e) => setWeeks(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
            min="1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Fiyat (₺)
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
            min="0"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 text-white py-3 px-6 rounded-xl shadow hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Yükleniyor..." : "Program Yükle"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadProgram;
