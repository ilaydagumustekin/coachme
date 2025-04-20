
import React, { useState } from 'react';

const ProgramSilmePage = () => {
  const [programId, setProgramId] = useState('');

  const handleProgramDelete = () => {
    // Backend'den programı silme işlemi yapılacak
    console.log('Silinecek program ID:', programId);
    alert('Program başarıyla silindi!');
    setProgramId('');
  };

  return (
    <div>
      <h2>Program Sil</h2>
      <div>
        <label>Program ID:</label>
        <input
          type="text"
          value={programId}
          onChange={(e) => setProgramId(e.target.value)}
          required
        />
      </div>
      <button onClick={handleProgramDelete}>Sil</button>
    </div>
  );
};

export default ProgramSilmePage;
