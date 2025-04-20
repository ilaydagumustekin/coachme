import React, { useState, useEffect } from 'react';

const DeleteTrainerForm = () => {
    const [trainers, setTrainers] = useState([]);
    const [selectedTrainer, setSelectedTrainer] = useState('');

    // Eğitmen listesini almak için bir API çağrısı simülasyonu (örnek)
    useEffect(() => {
        // Burada bir API çağrısı yaparak eğitmen listesini alabilirsiniz
        const fetchTrainers = async () => {
            // Örnek eğitmenler
            const fetchedTrainers = [
                { id: 1, name: 'Eğitmen 1' },
                { id: 2, name: 'Eğitmen 2' },
                { id: 3, name: 'Eğitmen 3' },
            ];
            setTrainers(fetchedTrainers);
        };

        fetchTrainers();
    }, []);

    const handleDelete = () => {
        if (!selectedTrainer) {
            alert('Lütfen silmek istediğiniz eğitmeni seçin!');
            return;
        }

        // Silme işlemini burada API ile gerçekleştirebilirsiniz
        alert(`Eğitmen ${selectedTrainer} başarıyla silindi!`);

        // Silme işleminden sonra eğitmen listesini güncellemek
        setTrainers(trainers.filter((trainer) => trainer.name !== selectedTrainer));
        setSelectedTrainer('');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8">Eğitmen Silme</h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <select
                    value={selectedTrainer}
                    onChange={(e) => setSelectedTrainer(e.target.value)}
                    className="w-full p-3 border rounded-lg mb-4"
                >
                    <option value="">Eğitmen Seçin</option>
                    {trainers.map((trainer) => (
                        <option key={trainer.id} value={trainer.name}>
                            {trainer.name}
                        </option>
                    ))}
                </select>

                <button
                    onClick={handleDelete}
                    className="w-full bg-red-600 text-white py-3 rounded-lg"
                >
                    Eğitmeni Sil
                </button>
            </div>
        </div>
    );
};

export default DeleteTrainerForm;
