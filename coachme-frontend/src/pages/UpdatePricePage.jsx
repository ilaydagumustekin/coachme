import React, { useState } from "react";
import './AdminDashboard.css';
import './AddTrainerPages.css';

const UpdatePricePage = () => {
    const [price, setPrice] = useState('');

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Fiyatı güncellemek için gerekli işlemi yapabilirsiniz.
        alert(`New price: ${price} has been updated!`);
    };

    return (
        <div className="add-trainer-wrapper">
            <h1 className="text-3xl font-bold text-white mb-8">FİYAT GÜNCELLE</h1>
            <form onSubmit={handleSubmit} className="add-trainer-form">
                <div className="mb-6">
                    <label htmlFor="price" className="block text-lg font-medium mb-2">
                        Yeni Fiyat
                    </label>
                    <input
                        id="price"
                        type="number"
                        value={price}
                        onChange={handlePriceChange}
                        className="w-full p-3 border rounded-lg mb-3"
                        placeholder="Enter new price"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-xl shadow hover:bg-green-700 transition"
                >
                    Güncel Fiyat
                </button>
            </form>
        </div>
    );
};

export default UpdatePricePage;
