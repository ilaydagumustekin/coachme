import React, { useState } from "react";
import "./JoinTeam.css";

const apiUrl = process.env.REACT_APP_API_URL;

function JoinTeam() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    certificate: "",
    height: "",
    weight: "",
    phone: "",
    email: "",
    idNumber: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (formData[key].trim() === "") {
        setError("Lütfen tüm alanları doldurunuz!");
        return;
      }
    }

    if (parseInt(formData.age) > 40) {
      alert("Yaş sınırı aşıldı. Yöneticiye bildirim gönderilmeyecek.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      // Dummy veriyle gönderim
      const payload = {
        name: formData.name || "Dummy Name",
        email: formData.email || "dummy@example.com",
        message: formData.message || "Eğitmen olmak istiyorum.",
      };

      const response = await fetch(`${apiUrl}/users/apply-trainer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Başvuru gönderilemedi.");
      } else {
        setSuccess(data.message || "Başvurunuz başarıyla gönderildi!");
        setFormData({
          name: "",
          age: "",
          certificate: "",
          height: "",
          weight: "",
          phone: "",
          email: "",
          idNumber: "",
          message: "",
        });
      }
    } catch (err) {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="join-team-background">
      <div className="form-container">
        <h2>EKİBİMİZE KATIL</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ad Soyad"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="number"
            name="age"
            placeholder="Yaş"
            onChange={handleChange}
            value={formData.age}
          />
          <input
            type="text"
            name="certificate"
            placeholder="Sertifika"
            onChange={handleChange}
            value={formData.certificate}
          />
          <input
            type="number"
            name="height"
            placeholder="Boy (cm)"
            onChange={handleChange}
            value={formData.height}
          />
          <input
            type="number"
            name="weight"
            placeholder="Kilo (kg)"
            onChange={handleChange}
            value={formData.weight}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            onChange={handleChange}
            value={formData.phone}
          />
          <input
            type="email"
            name="email"
            placeholder="E-posta"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="text"
            name="idNumber"
            placeholder="TC Kimlik No"
            onChange={handleChange}
            value={formData.idNumber}
          />
          {/* DÜZGÜN TEXTAREA */}
          <textarea
            name="message"
            placeholder="Neden eğitmen olmak istiyorsunuz?"
            onChange={handleChange}
            value={formData.message}
            rows={4}
            style={{ resize: "vertical", width: "100%", margin: "8px 0" }}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Gönderiliyor..." : "Başvur"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinTeam;
