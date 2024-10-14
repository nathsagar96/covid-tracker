const API_URL = 'https://disease.sh/v3/covid-19';

export const fetchGlobalData = async () => {
    const response = await fetch(`${API_URL}/all`);
    const data = await response.json();
    return data;
};

export const fetchCountryData = async (country) => {
    const response = await fetch(`${API_URL}/countries/${country}`);
    const data = await response.json();
    return data;
};

export const fetchCountries = async () => {
    const response = await fetch(`${API_URL}/countries`);
    const data = await response.json();
    return data.map((country) => country.country);
};
