import React from 'react';

const ProgramProgress = ({ progress }) => {
    return (
        <div>
            <h2>Program İlerlemesi</h2>
            <p>{progress}% tamamlandı</p>
        </div>
    );
};

export default ProgramProgress;