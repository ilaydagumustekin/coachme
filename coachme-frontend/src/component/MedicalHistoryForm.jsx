import React, { useState } from 'react';

const MedicalHistoryForm = () => {
  const [history, setHistory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hastalık geçmişiniz kaydedildi: ${history}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hastalık Geçmişiniz:
        <textarea
          value={history}
          onChange={(e) => setHistory(e.target.value)}
          placeholder="Geçirdiğiniz hastalıkları yazın..."
        />
      </label>
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default MedicalHistoryForm;
