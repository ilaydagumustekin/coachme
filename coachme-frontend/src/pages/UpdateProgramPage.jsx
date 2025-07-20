import React, { useState } from "react";
import "./AdminDashboard.css";
import "./AddTrainerPages.css";

const apiUrl = process.env.REACT_APP_API_URL;

const UpdateProgramPage = () => {
  const [programId, setProgramId] = useState("");
  const [programData, setProgramData] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleIdChange = (e) => {
    setProgramId(e.target.value);
    setSuccess("");
    setError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProgramData({
      ...programData,
      [name]: value,
    });
    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    if (!programId.trim()) {
      setError("Lütfen program ID girin.");
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
      const payload = {
        name: programData.name,
        description: programData.description,
        price: Number(programData.price),
        duration: Number(programData.duration),
      };

      const response = await fetch(`${apiUrl}/admin/programs/${programId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.message || "Program güncellenemedi.");
      } else {
        setSuccess("Program başarıyla güncellendi!");
        // setProgramData({ name: '', description: '', price: '', duration: '' });
      }
    } catch (err) {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    }
    setLoading(false);
  };

  return (
    <div className="add-trainer-wrapper">
      <h1 className="text-3xl font-bold text-white mb-8">PROGRAM GÜNCELLE</h1>
      <form onSubmit={handleSubmit} className="add-trainer-form">
        <div className="mb-6">
          <label
            htmlFor="programId"
            className="block text-lg font-medium mb-2 text-white"
          >
            Program ID
          </label>
          <input
            type="text"
            id="programId"
            name="programId"
            value={programId}
            onChange={handleIdChange}
            className="w-full p-3 border rounded-lg mb-3"
            placeholder="Program ID girin"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg font-medium mb-2 text-white"
          >
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
          <label
            htmlFor="description"
            className="block text-lg font-medium mb-2 text-white"
          >
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
          <label
            htmlFor="price"
            className="block text-lg font-medium mb-2 text-white"
          >
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
          <label
            htmlFor="duration"
            className="block text-lg font-medium mb-2 text-white"
          >
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
        {success && <div className="text-green-500 mb-4">{success}</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl shadow hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Güncelleniyor..." : "Güncelle"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProgramPage;
