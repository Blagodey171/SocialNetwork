import React from 'react';
import style from './header.module.css'

const header = (props) => {
    return (
        <div className={style.container}>
            <header className={style.header}>
                <div className={style.logo}>
                    <h1>Header</h1>
                </div>
                <div className={style.fastLink}>

                </div>
            </header>
        </div>
    )
}

export default header;