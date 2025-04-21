import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import './AddTrainerPages.css';

const AddTrainerPages = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialty: '',
        experience: '',
        gender: '',
        bio: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Yeni Eğitmen Bilgileri:", formData);
        navigate('/admin/trainer-list');
    };

    return (
        <div className="add-trainer-wrapper">
            <h1 className="text-3xl font-bold text-white mb-8">EĞİTMEN EKLE</h1>
            <form
                onSubmit={handleSubmit}
                className="add-trainer-form"
            >
                <input
                    type="text"
                    name="firstName"
                    placeholder="Eğitmen Adı"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg mb-3"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Eğitmen Soyadı"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg mb-3"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-posta Adresi"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg mb-3"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon Numarası"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg mb-3"
                    required
                />
                <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg mb-3"
                    required
                >
                    <option value="">Uzmanlık Alanı Seç</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Beslenme">Beslenme</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Pilates">Pilates</option>
                </select>
                <input
                    type="number"
                    name="experience"
                    placeholder="Tecrübe Yılı"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg mb-3"
                    min="0"
                    required
                />
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg mb-3"
                    required
                >
                    <option value="">Cinsiyet Seç</option>
                    <option value="Kadın">Kadın</option>
                    <option value="Erkek">Erkek</option>
                    <option value="Diğer">Diğer</option>
                </select>
                <textarea
                    name="bio"
                    placeholder="Biyografi (kısa açıklama)"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border rounded-lg mb-3"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-xl shadow hover:bg-red-700 transition"
                >
                    Eğitmeni Kaydet
                </button>
            </form>
        </div>
    );
};

export default AddTrainerPages;
