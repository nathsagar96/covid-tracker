import React from 'react';

const Statistics = ({ data }) => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="p-6 bg-blue-100 border border-blue-200 rounded-lg shadow-md text-center">
        <h3 className="text-lg font-semibold text-blue-700">Cases</h3>
        <p className="text-2xl font-bold text-blue-900">{data.cases || 'N/A'}</p>
      </div>
      <div className="p-6 bg-green-100 border border-green-200 rounded-lg shadow-md text-center">
        <h3 className="text-lg font-semibold text-green-700">Recovered</h3>
        <p className="text-2xl font-bold text-green-900">{data.recovered || 'N/A'}</p>
      </div>
      <div className="p-6 bg-red-100 border border-red-200 rounded-lg shadow-md text-center">
        <h3 className="text-lg font-semibold text-red-700">Deaths</h3>
        <p className="text-2xl font-bold text-red-900">{data.deaths || 'N/A'}</p>
      </div>
    </div>
  );
};

export default Statistics;
