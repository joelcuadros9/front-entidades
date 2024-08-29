import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="Logo SB" />
            </div>
            <h1>Entidades</h1>
        </div>
    );
};

export default Header;
