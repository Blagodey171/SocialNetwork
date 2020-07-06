import React from 'react';
import './header.scss';

import Navbar from '../navbar/fastLinks'

const header = (props) => {
    return (
        <div className='containerHeader'>
            <header className='header'>
                <div className='logo'>
                    <h1>socialTrain</h1>
                </div>
            </header>
        </div>
    )
}

export default header;