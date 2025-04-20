import React from 'react';

const TrainerListPage = () => {
    // Bu örnekte sabit veriler kullanıyoruz, ancak gerçekte API'den çekebilirsiniz
    const trainers = [
        { firstName: 'Ahmet', lastName: 'Yılmaz', specialty: 'Fitness', email: 'ahmet@gmail.com' },
        { firstName: 'Ayşe', lastName: 'Kaya', specialty: 'Beslenme', email: 'ayse@gmail.com' }
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8">Eğitmen Listesi</h1>
            <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow">
                {trainers.map((trainer, index) => (
                    <div key={index} className="mb-4 p-4 border-b">
                        <h2 className="text-xl font-bold">{trainer.firstName} {trainer.lastName}</h2>
                        <p><strong>Uzmanlık Alanı:</strong> {trainer.specialty}</p>
                        <p><strong>Email:</strong> {trainer.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrainerListPage;
