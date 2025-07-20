import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TrainerCard from '../component/TrainerCard';
import './Team.css';

const apiUrl = process.env.REACT_APP_API_URL;

const Team = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await fetch(`${apiUrl}/users/trainers`);
                const data = await response.json();
                setTrainers(data);
            } catch (err) {
                console.error("Eğitmenler alınırken hata oluştu:", err);
            }
        };

        fetchTrainers();
    }, []);

    return (
        <div className="team-container">
            <h2>EKİBİMİZ</h2>
            <div className="account-link">
                <Link to="/account">
                    <button>Hesabımı Görüntüle</button>
                </Link>
            </div>
            
            <div className="trainer-list">
                {trainers.map((trainer) => (
                    <TrainerCard
                        key={trainer._id}
                        name={trainer.name}
                        specialty={trainer.specialty}
                        experience={trainer.experience}
                        bio={trainer.bio}
                    />
                ))}
            </div>
        </div>
    );
};

export default Team;
