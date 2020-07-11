import React from 'react';
import './header.scss';



const header = (props) => {
    return (
        <div className='container-header'>
            <header className='header'>
                <div className='logo'>
                    <h1>socialTrain</h1>
                </div>
            </header>
        </div>
    )
}

export default header;