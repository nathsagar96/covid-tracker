import React from 'react';

const Cards = ({ data: { cases, deaths, recovered } }) => {
    if (!cases) return <p>Loading...</p>;

    return (
        <div className="cards">
            <div className="card">
                <h3>Cases</h3>
                <p>{cases.toLocaleString()}</p>
            </div>
            <div className="card">
                <h3>Deaths</h3>
                <p>{deaths.toLocaleString()}</p>
            </div>
            <div className="card">
                <h3>Recovered</h3>
                <p>{recovered.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default Cards;
