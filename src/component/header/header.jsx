import React from 'react';
import style from './header.module.css';
import Friends from '../friend/friend'

const header = (props) => {
    return (
        <div className={style.container}>
            <header className={style.header}>
                <div className={style.logo}>
                    <h1>socialTrain</h1>
                    <Friends />
                </div>
                <div className={style.fastLink}>

                </div>
            </header>
        </div>
    )
}

export default header;