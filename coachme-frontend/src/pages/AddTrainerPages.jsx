import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

        // Form gönderildikten sonra Eğitmen Listesi sayfasına yönlendir
        navigate('/admin/trainer-list');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8">Eğitmen Ekle</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow">
                <input
                    type="text"
                    name="firstName"
                    placeholder="Eğitmen Adı"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 border rounded-lg"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Eğitmen Soyadı"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 border rounded-lg"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-posta Adresi"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 border rounded-lg"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon Numarası"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 border rounded-lg"
                    required
                />
                <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 border rounded-lg"
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
                    className="w-full mb-4 p-3 border rounded-lg"
                    min="0"
                    required
                />
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 border rounded-lg"
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
                    className="w-full mb-4 p-3 border rounded-lg"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg"
                >
                    Eğitmeni Kaydet
                </button>
            </form>
        </div>
    );
};

export default AddTrainerPages;
