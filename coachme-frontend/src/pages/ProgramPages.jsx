import React, { useState } from 'react';
import ProgramList from '../component/ProgramList';
import ProgramDetail from '../component/ProgramDetails';
import ProgramProgress from '../component/ProgramProgress';
import DraftWarningModal from '../component/DraftWarningModal';

const ProgramPage = ({
                         selectedProgram,
                         joinedProgram,
                         archivedPrograms,
                         showWarning,
                         onSelectProgram,
                         onJoinProgram,
                         onChangeProgram,
                         onReturnToOldProgram
                     }) => {
    const [isWarningVisible, setIsWarningVisible] = useState(false);

    const programs = [
        {
            title: 'Başlangıç Programı',
            nutrition: 'Günde 3 öğün dengeli beslenme',
            training: 'Haftada 3 gün yürüyüş',
            duration: 4,
            difficulty: 'Kolay',
            dateChanged: '2025-04-10'
        },
        {
            title: 'İleri Seviye Programı',
            nutrition: 'Protein ağırlıklı diyet',
            training: 'Haftada 5 gün fitness',
            duration: 8,
            difficulty: 'Zor',
            dateChanged: '2025-04-01'
        }
    ];

    return (
        <div>
            <h1>Mevcut Programım</h1>

            {/* Mevcut program bilgileri */}
            {joinedProgram ? (
                <div>
                    <h2>{joinedProgram.title}</h2>
                    <p><strong>Beslenme:</strong> {joinedProgram.nutrition}</p>
                    <p><strong>Antrenman:</strong> {joinedProgram.training}</p>
                    <p><strong>Süresi:</strong> {joinedProgram.duration} hafta</p>
                    <p><strong>Zorluk:</strong> {joinedProgram.difficulty}</p>
                    <p><strong>Değişim Tarihi:</strong> {joinedProgram.dateChanged}</p>
                    <button onClick={() => onChangeProgram(programs[1])}>Programı Değiştir</button>
                </div>
            ) : (
                <div>
                    <h2>Henüz bir programa katılmadınız</h2>
                    <ProgramList onJoinProgram={onJoinProgram} />
                </div>
            )}

            {/* Program değiştirme uyarısı */}
            {isWarningVisible && (
                <DraftWarningModal
                    onSaveDraft={() => setIsWarningVisible(false)}
                    onDiscard={() => setIsWarningVisible(false)}
                />
            )}

            {/* Eski programlara dönüş */}
            <div>
                <h2>Eski Programlar</h2>
                <button onClick={onReturnToOldProgram}>Eski Programa Geri Dön</button>
            </div>
        </div>
    );
};

export default ProgramPage;
