import React from 'react';
import '../css/charts.css';
import chart from '../assets/chart.png';
import bars from '../assets/bars.png';

const Charts = () => {
    return(
        <div className='charts-container'>
            <div className='inflow-container'>
                <img className='chart' src={ chart } alt=''/>
            </div>
            <div className='new-user'>
                <img className='bar' src={ bars } alt='' />
                <div className='bar-desc-container'>
                    <p className='bar-desc'>New Users</p>
                    <p><span className='rate'>(+23%)</span> than last week</p>
                </div>
            </div>
        </div>
    );
}

export default Charts;