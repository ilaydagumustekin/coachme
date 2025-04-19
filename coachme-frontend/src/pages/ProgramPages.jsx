import React, { useState } from 'react';
import ProgramList from '../component/ProgramList';
import ProgramDetail from '../component/ProgramDetails';
import ProgramProgress from '../component/ProgramProgress';
import DraftWarningModal from '../component/DraftWarningModal';

const ProgramPage = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [joinedProgram, setJoinedProgram] = useState(null);
    const [progress, setProgress] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const programs = [
        {
            title: 'Başlangıç Programı',
            nutrition: 'Günde 3 öğün dengeli beslenme',
            training: 'Haftada 3 gün yürüyüş',
            duration: 4,
            difficulty: 'Kolay'
        },
        {
            title: 'İleri Seviye Programı',
            nutrition: 'Protein ağırlıklı diyet',
            training: 'Haftada 5 gün fitness',
            duration: 8,
            difficulty: 'Zor'
        }
    ];

    const handleProgramSelect = (program) => {
        if (selectedProgram && !joinedProgram) {
            setShowModal(true);
        } else {
            setSelectedProgram(program);
        }
    };

    const handleJoin = () => {
        setJoinedProgram(selectedProgram);
        setProgress(0);
    };

    const handleSaveDraft = () => {
        console.log('Taslak kaydedildi');
        setShowModal(false);
    };

    const handleDiscard = () => {
        setSelectedProgram(null);
        setShowModal(false);
    };

    return (
        <div>
            <h1>CoachMe Programları</h1>
            {!joinedProgram && (
                <ProgramList programs={programs} onSelect={handleProgramSelect} />
            )}
            {!joinedProgram && selectedProgram && (
                <ProgramDetail program={selectedProgram} onJoin={handleJoin} />
            )}
            {joinedProgram && <ProgramProgress progress={progress} />}
            {showModal && <DraftWarningModal onSaveDraft={handleSaveDraft} onDiscard={handleDiscard} />}
        </div>
    );
};

export default ProgramPage;