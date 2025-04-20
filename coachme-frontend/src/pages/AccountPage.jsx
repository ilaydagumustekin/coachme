import React from 'react';
import { Link } from 'react-router-dom';

const AccountPage = () => {
    return (
        <div>
            <h1>Hesabım</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/current-program">Mevcut Programım</Link>
                    </li>
                    <li>
                        <Link to="/change-program">Programı Değiştir</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AccountPage;
