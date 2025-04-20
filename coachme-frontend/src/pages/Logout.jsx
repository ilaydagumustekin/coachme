import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
    const { logout } = useAuth(); // custom hook ile context'e erişiyoruz
    const navigate = useNavigate();

    useEffect(() => {
        const confirmLogout = window.confirm("Çıkış yapmak istediğinizden emin misiniz?");
        if (confirmLogout) {
            logout();
            navigate('/login');
        } else {
            navigate('/account');
        }
    }, [logout, navigate]);

    return null;
};

export default Logout;
