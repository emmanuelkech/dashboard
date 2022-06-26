import React from 'react';
import '../css/requests.css';

import michael from '../assets/michael.png';
import chioma from '../assets/chioma.png';
import bolu from '../assets/bolu.png';
import mariam from '../assets/mariam.png';
import expand from '../assets/expand.png';

const Request = () => {
    return (
        <div className='request-container'>
            <div className='request-virtual'>
                <div className='virtual-title-container'>
                    <p className='virtual-title'>Recent Requests</p>
                </div>
                <div className='table-header'>
                    <p>Name/Email</p>
                    <p>Type</p>
                    <p>Status</p>
                    <p>Date</p>
                </div>
                <div className='table-row'>
                    <div className='name-container'>
                        <div className='image-container'>
                            <img className='user-image' src={ michael } alt='' />
                        </div>
                        <div className='user-info'>
                            <p className='name'>Michael Olu</p>
                            <p className='email'>michael@mail.com</p>
                        </div>
                    </div>
                    <div className='user-type-container'>
                        <p className='user-type'>New Agent</p>
                    </div>
                    <div className='user-status-container'>
                        <p className='user-status'>Pending</p>
                    </div>
                    <div className='date-container'>
                        <p className='date'>23/04/18</p>
                    </div>
                    <div className='expand-container'>
                        <img src={ expand } alt='' />
                    </div>
                </div>

                <div className='table-row'>
                    <div className='name-container'>
                        <div className='image-container'>
                            <img className='user-image' src={ chioma } alt='' />
                        </div>
                        <div className='user-info'>
                            <p className='name'>Chioma James</p>
                            <p className='email'>alexa@mail.com</p>
                        </div>
                    </div>
                    <div className='user-type-container'>
                        <p className='user-type'>Account Deactivation</p>
                    </div>
                    <div className='user-status-container'>
                        <p className='user-status'>Pending</p>
                    </div>
                    <div className='date-container'>
                        <p className='date'>23/12/20</p>
                    </div>
                    <div className='expand-container'>
                        <img src={ expand } alt='' />
                    </div>
                </div>

                <div className='table-row'>
                    <div className='name-container'>
                        <div className='image-container'>
                            <img className='user-image' src={ bolu } alt='' />
                        </div>
                        <div className='user-info'>
                            <p className='name'>Boluwatife Ade</p>
                            <p className='email'>laure@mail.com</p>
                        </div>
                    </div>
                    <div className='user-type-container'>
                        <p className='user-type'>New User</p>
                    </div>
                    <div className='user-status-container'>
                        <p className='active-status'>Active</p>
                    </div>
                    <div className='date-container'>
                        <p className='date'>13/04/19</p>
                    </div>
                    <div className='expand-container'>
                        <img src={ expand } alt='' />
                    </div>
                </div>

                <div className='last-row'>
                    <div className='name-container'>
                        <div className='image-container'>
                            <img className='user-image' src={ mariam } alt='' />
                        </div>
                        <div className='user-info'>
                            <p className='name'>Mariam Eric</p>
                            <p className='email'>mariam@mail.com</p>
                        </div>
                    </div>
                    <div className='user-type-container'>
                        <p className='user-type'>Email Auth</p>
                    </div>
                    <div className='user-status-container'>
                        <p className='active-status'>Active</p>
                    </div>
                    <div className='date-container'>
                        <p className='date'>03/04/21</p>
                    </div>
                    <div className='expand-container'>
                        <img src={ expand } alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Request;