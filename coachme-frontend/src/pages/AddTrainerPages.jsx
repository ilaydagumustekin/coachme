import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import "./AddTrainerPages.css";

const apiUrl = process.env.REACT_APP_API_URL;

const AddTrainerPages = () => {
  const [userId, setUserId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    experience: "",
    bio: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "userId") {
      setUserId(value);
      setSuccess("");
      setError("");
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      setSuccess("");
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!userId.trim()) {
      setError("Lütfen kullanıcı ID girin.");
      setLoading(false);
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Lütfen önce giriş yapın.");
      setLoading(false);
      return;
    }

    try {
      if (
        !formData.name ||
        !formData.specialty ||
        !formData.experience ||
        !formData.bio
      ) {
        setError("Lütfen tüm alanları doldurun.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        `${apiUrl}/admin/users/${userId}/make-trainer`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: formData.name,
            specialty: formData.specialty,
            experience: Number(formData.experience),
            bio: formData.bio,
            isTrainer: true,
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(data.message || "Eğitmen güncellenemedi.");
      } else {
        setSuccess("Eğitmen başarıyla güncellendi!");
        setTimeout(() => navigate("/admin/trainer-list"), 1000);
      }
    } catch (err) {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    }
    setLoading(false);
  };

  return (
    <div className="add-trainer-wrapper">
      <h1 className="text-3xl font-bold text-white mb-8">
        EĞİTMEN YAP / GÜNCELLE
      </h1>
      <form onSubmit={handleSubmit} className="add-trainer-form">
        <input
          type="text"
          name="userId"
          placeholder="Kullanıcı ID"
          value={userId}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Eğitmen Adı"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          required
        />
        <select
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          required
        >
          <option value="">Uzmanlık Alanı Seç</option>
          <option value="Fitness">Fitness</option>
          <option value="Beslenme">Beslenme</option>
          <option value="Yoga">Yoga</option>
          <option value="Pilates">Pilates</option>
        </select>
        <input
          type="number"
          name="experience"
          placeholder="Tecrübe Yılı"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          min="0"
          required
        />
        <textarea
          name="bio"
          placeholder="Biyografi (kısa açıklama)"
          value={formData.bio}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 border rounded-lg mb-3"
          required
        ></textarea>

        {success && <div className="text-green-500 mb-3">{success}</div>}
        {error && <div className="text-red-500 mb-3">{error}</div>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl shadow hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Güncelleniyor..." : "Eğitmeni Yap / Güncelle"}
        </button>
      </form>
    </div>
  );
};

export default AddTrainerPages;
