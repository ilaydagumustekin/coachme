import React from 'react';
import { Link } from 'react-router-dom';
import TrainerCard from '../component/TrainerCard';
import './Team.css';

const trainers = [
    {
        id: 1,
        name: "Ayşe Yılmaz",
        age: 32,
        gender: "Kadın",
        experience: 8,
        specialty: "Fitness ve Beslenme",
        bio: "8 yıldır bireysel koçluk yapan Ayşe, sporcu beslenmesi üzerine uzmanlaşmıştır."
    },
    {
        id: 2,
        name: "Mehmet Demir",
        age: 40,
        gender: "Erkek",
        experience: 15,
        specialty: "Pilates ve Yoga",
        bio: "Zihin-beden uyumu konusunda uzmanlaşmış, birçok yoga eğitimi vermiştir."
    }
    // Eğitmen listeni dilediğin kadar uzatabilirsin
];

const Team = () => {
    return (
        <div className="team-container">
            <h2>EKİBİMİZ</h2>
            {/* Hesabım sayfasına yönlendiren bir bağlantı ekliyoruz */}
            <div className="account-link">
                <Link to="/account">
                    <button>Hesabımı Görüntüle</button>
                </Link>
            </div>
            
            {/* Eğitmenleri listele */}
            <div className="trainer-list">
                {trainers.map((trainer) => (
                    <TrainerCard key={trainer.id} {...trainer} />
                ))}
            </div>
        </div>
    );
};

export default Team;
