import React from 'react';
import { Link } from 'react-router-dom';
import './AccountPage.css'; // Stil dosyasını unutma!

const AccountPage = () => {
    return (
        <div className="account-container">
            <h1>HESABIM</h1>
            <p>Burada kişisel hesap bilgilerinizi görüntüleyebilirsiniz.</p>
            <nav>
                <ul className="account-links">
                    <li>
                        <Link to="/mevcut-program">Mevcut Program</Link>
                    </li>
                    <li>
                        <Link to="/program-degistir">Programı Değiştir</Link>
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
