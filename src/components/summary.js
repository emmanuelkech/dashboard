import React from 'react';
import '../css/summary.css';

import pending from '../assets/pending.png';
import approved from '../assets/approved.png';
import agents from '../assets/agents.png';
import group from '../assets/group.png';
import trendup from '../assets/green-trending-up.png';
import trenddown from '../assets/icon-trending-down.png';
import trend from '../assets/orange-trending-up.png';

const Summary = () => {
    return (
        <div className='summary-container'>
            <div className='card'>
                <div className='request-section'>
                    <div className='card-image'>
                        <img src={ pending } alt='' />
                    </div>
                    <div className='request-info'>
                        <p className='count'>1478 286</p>
                        <p className='card-name'>Pending Requests</p>
                    </div>
                </div>
                <div className='range-section'>
                    <img src={ trendup } alt='' />
                    <p className='percent up'>4.07%</p>
                    <p className='month'>Last month</p>
                </div>
            </div>

            <div className='card'>
                <div className='request-section'>
                    <div className='card-image'>
                        <img src={ approved } alt='' />
                    </div>
                    <div className='request-info'>
                        <p className='count'>478 520</p>
                        <p className='card-name'>Approved Requests</p>
                    </div>
                </div>
                <div className='range-section'>
                    <img src={ trendup } alt='' />
                    <p className='percent up'>0.24%</p>
                    <p className='month'>Last month</p>
                </div>
            </div>

            <div className='card'>
                <div className='request-section'>
                    <div className='card-image'>
                        <img src={ agents } alt='' />
                    </div>
                    <div className='request-info'>
                        <p className='count'>154 872</p>
                        <p className='card-name'>Total Agents</p>
                    </div>
                </div>
                <div className='range-section'>
                    <img src={ trenddown } alt='' />
                    <p className='percent down'>1.64%</p>
                    <p className='month'>Last month</p>
                </div>
            </div>

            <div className='card'>
                <div className='request-section'>
                    <div className='card-image'>
                        <img src={ group } alt='' />
                    </div>
                    <div className='request-info'>
                        <p className='count'>167</p>
                        <p className='card-name'>Total Users</p>
                    </div>
                </div>
                <div className='range-section'>
                    <img src={ trend } alt='' />
                    <p className='percent mid'>0.00%</p>
                    <p className='month'>Last month</p>
                </div>
            </div>
        </div>
    );
}

export default Summary;