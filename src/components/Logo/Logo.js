import React from 'react';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div>
            <img className='mw-100 pb3 center crop' src={logo} alt='logo'></img>
        </div>
    )
}

export default Logo;