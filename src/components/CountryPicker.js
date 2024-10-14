import React from 'react';

const CountryPicker = ({ countries, handleCountryChange }) => {
    return (
        <div className="w-full max-w-md mx-auto mt-8">
            <label htmlFor="country" className="block text-lg font-medium text-gray-700 mb-2">
                Select Country:
            </label>
            <select
                id="country"
                onChange={(e) => handleCountryChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 bg-white"
            >
                <option value="Global">Global</option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountryPicker;
