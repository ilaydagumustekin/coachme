import React, { useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const ProgramSilmePage = () => {
  const [programId, setProgramId] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleProgramDelete = async () => {
    setSuccess("");
    setError("");

    if (!programId.trim()) {
      setError("Lütfen bir Program ID giriniz.");
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

      // 204 No Content ise JSON bekleme
      if (response.status === 204) {
        setSuccess("Program başarıyla silindi!");
        setProgramId("");
        setLoading(false);
        return;
      }

      // Diğer durumlarda JSON mesajı varsa göster
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.message || "Program silinemedi.");
      } else {
        setSuccess("Program başarıyla silindi!");
        setProgramId("");
      }
    } catch (err) {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 24,
        background: "#181A20",
        borderRadius: 12,
        boxShadow: "0 2px 8px #0002",
      }}
    >
      <h2 style={{ color: "white", marginBottom: 24 }}>Program Sil</h2>
      {success && (
        <div style={{ color: "green", marginBottom: 12 }}>{success}</div>
      )}
      {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}

      <div style={{ marginBottom: 16 }}>
        <label htmlFor="programId" style={{ color: "white", marginRight: 8 }}>
          Program ID:
        </label>
        <input
          id="programId"
          type="text"
          value={programId}
          onChange={(e) => setProgramId(e.target.value)}
          required
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid #444",
            background: "#222",
            color: "#fff",
            width: "100%",
          }}
        />
      </div>

      <button
        onClick={handleProgramDelete}
        disabled={loading || !programId.trim()}
        style={{
          background: loading ? "#444" : "#e11d48",
          color: "#fff",
          padding: "10px 32px",
          border: "none",
          borderRadius: 8,
          fontWeight: "bold",
          width: "100%",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "background 0.2s",
        }}
      >
        {loading ? "Siliniyor..." : "Sil"}
      </button>
    </div>
  );
};

export default ProgramSilmePage;
