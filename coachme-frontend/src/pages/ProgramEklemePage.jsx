import React, { useState } from "react";

const ProgramEklemePage = () => {
  const [programName, setProgramName] = useState("");
  const [programDetails, setProgramDetails] = useState("");

  const handleProgramSubmit = () => {
    // Program verilerini burada backend'e kaydedebilirsiniz
    console.log("Program adı:", programName);
    console.log("Program detayları:", programDetails);
    alert("Program başarıyla eklendi!");
    setProgramName("");
    setProgramDetails("");
  };

  return (
    <div>
      <h2>Yeni Program Ekle</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Program Adı:</label>
          <input
            type="text"
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Program Detayları:</label>
          <textarea
            value={programDetails}
            onChange={(e) => setProgramDetails(e.target.value)}
            required
          />
        </div>
        <button onClick={handleProgramSubmit}>Ekle</button>
      </form>
    </div>
  );
};

export default ProgramEklemePage;
