import React from 'react';
import Header from '../components/header';
import Summary from '../components/summary';
import Charts from './charts';
import Request from './requests';
import '../css/main.css';

const Main = () => {
    return (
        <div className='main-container'>
            <Header />
            <Summary />
            <Charts />
            <Request />
        </div>
    );
}

export default Main;