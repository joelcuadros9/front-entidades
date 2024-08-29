import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.svg';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><img src={home} alt="Logo SB" /><a href="#">Inicio</a></li>
                <li><a href="#">Consulta</a></li>
                <li><a href="#">Crear registro</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
