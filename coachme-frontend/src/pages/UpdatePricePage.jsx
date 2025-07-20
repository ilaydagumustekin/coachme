import React, { useState } from "react";
import "./AdminDashboard.css";
import "./AddTrainerPages.css";

const apiUrl = process.env.REACT_APP_API_URL;

const UpdatePricePage = () => {
  const [programId, setProgramId] = useState("");
  const [price, setPrice] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleIdChange = (event) => {
    setProgramId(event.target.value);
    setSuccess("");
    setError("");
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    setSuccess("");
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");

    if (!programId.trim()) {
      setError("Lütfen program ID girin.");
      return;
    }
    if (!price.trim()) {
      setError("Lütfen yeni fiyatı girin.");
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
      const response = await fetch(`${apiUrl}/admin/programs/${programId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ price: Number(price) }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.message || "Fiyat güncellenemedi.");
      } else {
        setSuccess("Fiyat başarıyla güncellendi!");
      }
    } catch (err) {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    }
    setLoading(false);
  };

  return (
    <div className="add-trainer-wrapper">
      <h1 className="text-3xl font-bold text-white mb-8">FİYAT GÜNCELLE</h1>
      <form onSubmit={handleSubmit} className="add-trainer-form">
        <div className="mb-6">
          <label
            htmlFor="programId"
            className="block text-lg font-medium mb-2 text-white"
          >
            Program ID
          </label>
          <input
            id="programId"
            type="text"
            value={programId}
            onChange={handleIdChange}
            className="w-full p-3 border rounded-lg mb-3"
            placeholder="Program ID girin"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block text-lg font-medium mb-2 text-white"
          >
            Yeni Fiyat
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={handlePriceChange}
            className="w-full p-3 border rounded-lg mb-3"
            placeholder="Yeni fiyat girin"
            required
          />
        </div>
        {success && <div className="text-green-500 mb-4">{success}</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-xl shadow hover:bg-green-700 transition"
        >
          {loading ? "Güncelleniyor..." : "Güncel Fiyat"}
        </button>
      </form>
    </div>
  );
};

export default UpdatePricePage;
