import React from 'react';
import './TrainerCard.css';


const TrainerCard = ({ name, age, gender, experience, specialty, bio }) => {
    return (
        <div className="trainer-card">
            <h3>{name}</h3>
            <p><strong>Yaş:</strong> {age}</p>
            <p><strong>Cinsiyet:</strong> {gender}</p>
            <p><strong>Tecrübe:</strong> {experience} yıl</p>
            <p><strong>Uzmanlık:</strong> {specialty}</p>
            <p><strong>Biyografi:</strong> {bio}</p>
        </div>
    );
};

export default TrainerCard;
