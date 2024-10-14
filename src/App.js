import React, { useState, useEffect } from 'react';
import CountryPicker from './components/CountryPicker';
import Statistics from './components/Statistics';
import Chart from './components/Chart';
import { fetchGlobalData, fetchCountries, fetchCountryData } from './api/covidApi';

const CovidTracker = () => {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  // Fetch global and country-specific data
  useEffect(() => {
    const getData = async () => {
      if (selectedCountry === '' || selectedCountry === 'Global') {
        const globalData = await fetchGlobalData();
        setData(globalData);
      } else {
        const countryData = await fetchCountryData(selectedCountry);
        setData(countryData);
      }
    };
    getData();
  }, [selectedCountry]);

  // Fetch list of countries
  useEffect(() => {
    const getCountries = async () => {
      const countriesList = await fetchCountries();
      setCountries(countriesList);
    };
    getCountries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          COVID-19 Tracker
        </h1>

        <CountryPicker
          countries={countries}
          handleCountryChange={setSelectedCountry}
        />

        <Statistics data={data} />

        <div className="mt-8">
          <Chart data={data} country={selectedCountry} />
        </div>
      </div>
    </div>
  );
};

export default CovidTracker;
