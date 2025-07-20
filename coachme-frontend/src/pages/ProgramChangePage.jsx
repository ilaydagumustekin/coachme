import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgramCard from "../component/ProgramCard";

const apiUrl = process.env.REACT_APP_API_URL;

const ProgramChangePage = () => {
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchId, setSearchId] = useState(""); // ID input için state
  const [searchError, setSearchError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrograms = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`${apiUrl}/programs`);
        const data = await response.json();
        if (!response.ok)
          throw new Error(data.message || "Programlar yüklenemedi.");
        setPrograms(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchPrograms();
  }, []);

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    setShowAlternatives(false);
    setSearchError("");
  };

  const handleChangeProgram = () => {
    setShowAlternatives(true);
  };

  // Program ID ile arama fonksiyonu
  const handleIdSearch = (e) => {
    e.preventDefault();
    setSearchError("");
    if (!searchId.trim()) {
      setSearchError("Lütfen bir ID giriniz.");
      return;
    }
    const found = programs.find((p) => p._id === searchId || p.id === searchId);
    if (found) {
      setSelectedProgram(found);
      setShowAlternatives(false);
      setSearchError("");
    } else {
      setSearchError("Bu ID ile bir program bulunamadı.");
    }
  };

  const handleContinueWithProgram = async () => {
    const token = localStorage.getItem("token");
    if (!selectedProgram) return;
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl}/users/profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ selectedProgramId: selectedProgram._id }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Program kaydedilemedi.");
      navigate("/mevcut-program", { state: { program: selectedProgram } });
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Programı Değiştir</h1>

      {/* --- PROGRAM ID İLE ARAMA --- */}
      <form
        onSubmit={handleIdSearch}
        className="flex gap-2 items-center mb-6"
        autoComplete="off"
      >
        <input
          type="text"
          placeholder="Program ID girin"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border px-2 py-1 rounded w-60"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Ara
        </button>
        {searchError && (
          <span className="ml-4 text-red-600">{searchError}</span>
        )}
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {programs.map((program, index) => (
          <ProgramCard
            key={program._id || index}
            program={program}
            onSelect={handleProgramSelect}
            onChangeProgram={handleChangeProgram}
          />
        ))}
      </div>

      {selectedProgram && !showAlternatives && (
        <div className="mt-8 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold mb-2">
            Seçilen Program: {selectedProgram.title}
          </h2>
          <p>{selectedProgram.description}</p>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleChangeProgram}
          >
            Alternatif Programları Göster
          </button>
        </div>
      )}

      {showAlternatives && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Alternatif Programlar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs
              .filter((program) => program.title !== selectedProgram?.title)
              .map((program, index) => (
                <ProgramCard
                  key={program._id || index}
                  program={program}
                  onSelect={handleProgramSelect}
                />
              ))}
          </div>

          <div className="mt-6">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={handleContinueWithProgram}
            >
              Bu Programla Devam Et
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramChangePage;
