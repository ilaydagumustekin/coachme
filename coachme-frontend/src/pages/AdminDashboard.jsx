import React from "react";
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Stil dosyasını eklemeyi unutma!

const AdminDashboard = () => {
    return (
        <div className="admin-container">
            <h1>YÖNETİCİ PANELİ</h1>
            <p>Yönetici işlemlerinizi buradan gerçekleştirebilirsiniz.</p>
            <nav>
                <ul className="admin-links">
                    <li>
                        <Link to="/admin/add-trainer">Eğitmen Ekle</Link>
                    </li>
                    <li>
                        <Link to="/admin/delete-trainer">Eğitmen Sil</Link>
                    </li>
                    <li>
                        <Link to="/admin/update-price">Fiyat Güncelle</Link>
                    </li>
                    <li>
                        <Link to="/admin/upload-program">Program Yükle</Link>
                    </li>
                    <li>
                        <Link to="/admin/delete-program">Program Sil</Link>
                    </li>
                    <li>
                        <Link to="/admin/update-program">Program Güncelle</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboard;
