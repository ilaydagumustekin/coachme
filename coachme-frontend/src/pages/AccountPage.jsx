// src/pages/AccountPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AccountPage = () => {
    return (
        <div>
            <h1>Hesabım</h1>
            <p>Burada kişisel hesap bilgilerinizi görüntüleyebilirsiniz.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/current-program">Mevcut Programım</Link>
                    </li>
                    <li>
                        <Link to="/change-program">Programı Değiştir</Link>
                    </li>
                    <li>
                        <Link to="/medical-history">Hastalık Geçmişi</Link>
                    </li>
                    <li>
                        <Link to="/bmi">Vücut Kitle Endeksi</Link>
                    </li>
                    <li>
                        <Link to="/body-measurements">Beden Ölçüsü</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AccountPage;
