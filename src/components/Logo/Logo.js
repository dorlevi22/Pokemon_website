import pok_logo from './Logo.png';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <img alt='logo' src={pok_logo} height='200' width='500'/>
        </div>
    )
}

export default Logo;