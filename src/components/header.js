import React from 'react';
import '../css/header.css';

import search from '../assets/icon-search.png';
import vector from '../assets/vector.png';
import theme from '../assets/theme.png';
import notification from '../assets/notification.png';
import nafisa from '../assets/nafisa.png';

import hamburger from '../assets/icon-hamburger.svg';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='toggle-container'>
                <img src={ hamburger } alt='' />
            </div>
            <div className='page-name-container'>
                <p className='page-name'>Dashboard</p>
            </div>
            <div className='user-section'>
                <div className='search-container'>
                    <img className='search-icon' src={ search } alt='' />
                    <p className='search'>Enter keywords ...</p>
                </div>
                <div className='language-container'>
                    <p className='user-language user-icon'>EN</p>
                    <img className='vector' src={ vector } alt='' /> 
                </div> 
                <div className='settings'>
                    <img className='user-icon size' src={ theme } alt='' />
                    <img className='user-icon size' src={ notification } alt='' />
                </div>
                <img className='user-icon size' src={ nafisa } alt='' />
            </div>            
        </div>
    );
}

export default Header;