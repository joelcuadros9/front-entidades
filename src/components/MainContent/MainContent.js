import React, { useState, useEffect } from 'react';
import './MainContent.css';

const MainContent = () => {
    const [entities, setEntities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://localhost:7129/api/entity')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setEntities(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="main-content"><p>Loading...</p></div>;
    }

    if (error) {
        return <div className="main-content"><p>Error: {error}</p></div>;
    }

    return (
        <div className="main-content">
            <h2>Entidades</h2>
            <ul>
                {entities.map(value => (
                    <li key={value.id}>{value.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MainContent;
