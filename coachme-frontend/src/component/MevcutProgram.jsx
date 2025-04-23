import React, { useState } from 'react';

const MevcutProgram = () => {
    const programlar = [
        {
            name: "Haftalık Fitness Programı",
            description: "Genel vücut sağlığını iyileştirmek için tasarlanmış bir program.",
            exercises: [
                { day: "Pazartesi", exercise: "Squat - 3 set x 12 tekrar" },
                { day: "Salı", exercise: "Koşu - 30 dakika" },
                { day: "Çarşamba", exercise: "Push-up - 3 set x 15 tekrar" },
                { day: "Perşembe", exercise: "Bisiklet - 45 dakika" },
                { day: "Cuma", exercise: "Deadlift - 3 set x 10 tekrar" },
                { day: "Cumartesi", exercise: "Yoga - 60 dakika" },
                { day: "Pazar", exercise: "Dinlenme" }
            ]
        },
        {
            name: "Kardiyo Odaklı Program",
            description: "Kardiyo dayanıklılığını artırmak için düzenlenmiştir.",
            exercises: [
                { day: "Pazartesi", exercise: "Koşu - 45 dakika" },
                { day: "Salı", exercise: "Jumping Jack - 3 set x 50 tekrar" },
                { day: "Çarşamba", exercise: "İp Atlama - 20 dakika" },
                { day: "Perşembe", exercise: "Burpee - 3 set x 15 tekrar" },
                { day: "Cuma", exercise: "Bisiklet - 60 dakika" },
                { day: "Cumartesi", exercise: "Yüzme - 30 dakika" },
                { day: "Pazar", exercise: "Dinlenme" }
            ]
        },
        {
            name: "Esneme ve Mobilite Programı",
            description: "Kas esnekliğini ve eklem mobilitesini artırmak için uygundur.",
            exercises: [
                { day: "Pazartesi", exercise: "Yoga - 30 dakika" },
                { day: "Salı", exercise: "Pilates - 45 dakika" },
                { day: "Çarşamba", exercise: "Stretching - 20 dakika" },
                { day: "Perşembe", exercise: "Yoga - 60 dakika" },
                { day: "Cuma", exercise: "Foam Rolling - 15 dakika" },
                { day: "Cumartesi", exercise: "Hafif Yürüyüş - 30 dakika" },
                { day: "Pazar", exercise: "Dinlenme" }
            ]
        }
    ];

    const [program, setProgram] = useState(null);

    const rastgeleProgramGetir = () => {
        const rastgeleIndex = Math.floor(Math.random() * programlar.length);
        setProgram(programlar[rastgeleIndex]);
    };

    return (
        <div>
            <button onClick={rastgeleProgramGetir}>Rastgele Program Göster</button>

            {program && (
                <div style={{ marginTop: '20px' }}>
                    <h2>{program.name}</h2>
                    <p>{program.description}</p>
                    <h3>Program Detayları:</h3>
                    <ul>
                        {program.exercises.map((exercise, index) => (
                            <li key={index}>
                                <strong>{exercise.day}: </strong>{exercise.exercise}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MevcutProgram;
