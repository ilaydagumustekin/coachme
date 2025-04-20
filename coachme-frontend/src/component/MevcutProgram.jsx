// component/MevcutProgram.js
import React, { useEffect, useState } from 'react';

const MevcutProgram = () => {
    const [program, setProgram] = useState(null);

    useEffect(() => {
        // Burada API'den veya context'ten program verisini alabilirsiniz.
        // Şu an için statik bir program verisi kullanıyoruz.
        const fetchedProgram = {
            name: "Haftalık Fitness Programı",
            description: "Bu program, genel vücut sağlığını iyileştirmek için tasarlanmıştır. Ağırlık kaldırma, kardiyo ve esneme egzersizleri içerir.",
            exercises: [
                { day: "Pazartesi", exercise: "Squat - 3 set x 12 tekrar" },
                { day: "Salı", exercise: "Koşu - 30 dakika" },
                { day: "Çarşamba", exercise: "Push-up - 3 set x 15 tekrar" },
                { day: "Perşembe", exercise: "Bisiklet - 45 dakika" },
                { day: "Cuma", exercise: "Deadlift - 3 set x 10 tekrar" },
                { day: "Cumartesi", exercise: "Yoga - 60 dakika" },
                { day: "Pazar", exercise: "Dinlenme" }
            ]
        };

        setProgram(fetchedProgram);
    }, []);

    if (!program) {
        return <div>Program yükleniyor...</div>;
    }

    return (
        <div>
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
    );
};

export default MevcutProgram;
