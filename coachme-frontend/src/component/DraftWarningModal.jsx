import React from 'react';

const DraftWarningModal = ({ onSaveDraft, onDiscard }) => {
    return (
        <div>
            <p>Programı onaylamadan çıkmak üzeresiniz. Değişiklikleri kaydetmek ister misiniz?</p>
            <button onClick={onSaveDraft}>Taslak Kaydet</button>
            <button onClick={onDiscard}>Vazgeç</button>
        </div>
    );
};

export default DraftWarningModal;