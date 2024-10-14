import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register necessary components for Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({ data, country }) => {
    const chartData = {
        labels: ['Cases', 'Recovered', 'Deaths'],
        datasets: [{
            label: country ? `Current COVID-19 stats in ${country}` : 'Global COVID-19 stats',
            data: [data.cases || 0, data.recovered || 0, data.deaths || 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2,
        }],
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                {country ? `COVID-19 Statistics in ${country}` : 'Global COVID-19 Statistics'}
            </h2>
            <div className="relative">
                <Line data={chartData} />
            </div>
        </div>
    );
};

export default Chart;
