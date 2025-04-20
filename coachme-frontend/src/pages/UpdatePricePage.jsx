import React, { useState } from "react";

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
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8">Update Price</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                <div className="mb-6">
                    <label htmlFor="price" className="block text-lg font-medium mb-2">
                        New Price
                    </label>
                    <input
                        id="price"
                        type="number"
                        value={price}
                        onChange={handlePriceChange}
                        className="w-full p-3 border border-gray-300 rounded-md"
                        placeholder="Enter new price"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-600 text-white py-3 px-6 rounded-xl shadow hover:bg-green-700 transition"
                >
                    Update Price
                </button>
            </form>
        </div>
    );
};

export default UpdatePricePage;
