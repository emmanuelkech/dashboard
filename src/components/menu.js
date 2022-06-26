import React from 'react';
import '../css/menu.css';
import nafisa from '../assets/nafisa.png';

// Importing Nav Icons
import logo from '../assets/logo.png';
import home from '../assets/home.png';
import requests from '../assets/requests.png';
import kyc from '../assets/kyc.png';
import reports from '../assets/reports.png';
import audit from '../assets/audit.png';
import arrow from '../assets/arrow.png';
import users from '../assets/users.png';
import settings from '../assets/settings.png';

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='logo-container'>
                <img className='logo' src={ logo } alt=''></img>
            </div>  
            <div className='nav-container'>
                <div className='nav-item active'>
                    <img className='nav-icon' src={ home } alt='' />
                    <p>Dashboard</p>
                </div>
                <div className='nav-item'>
                    <img className='nav-icon' src={ requests } alt='' />
                    <p>Requests</p>
                </div>
                <div className='nav-item'>
                    <img className='nav-icon' src={ kyc } alt='' />
                    <p>KYCs</p>
                </div>
                <div className='nav-item'>
                    <img className='nav-icon' src={ reports } alt='' />
                    <p>Reports</p>
                </div>
                <div className='nav-item'>
                    <img className='nav-icon' src={ audit } alt='' />
                    <p>Audit Trail</p>
                    <img className='pro-icon' src={ arrow } alt='' />
                </div>
                <div className='nav-item'>
                    <img className='nav-icon' src={ users } alt='' />
                    <p>Users</p>
                </div>
                <div className='nav-item'>
                    <img className='nav-icon' src={ settings } alt='' />
                    <p>Settings</p>
                </div>
            </div> 
            <div className='user-container'>
                <img className='user-icon' src={ nafisa } alt='' />
                <div className='user-id'>
                    <p className='user-name'>Nafisa Sh.</p>
                    <p className='user-job'>Support manager</p>
                </div>
            </div>        
        </div>
    );
}

export default Menu;