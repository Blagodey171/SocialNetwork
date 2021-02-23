import React from 'react';
import './fastLinks.scss';
import { NavLink } from 'react-router-dom';

import BurgerMenu from './burgerMenu';


let fastLinks = (props) => {
    return (
        <div className='container-fast-links'>
            <div className='fast-links'>
                <BurgerMenu />
                <div className='logo'>
                    <h1>socialtrain</h1>
                </div>
                {
                    props.isAuth
                        ? <div className='user-name-container'>
                            <p className='user-name'>{props.login}</p>
                            <button className='logout-button' onClick={props.logoutThunkCreator}>Выход</button>
                        </div>
                        : <button className='login-button'><NavLink className='login-link' to='/login'>Вход</NavLink></button>
                }
            </div>
        </div>

    )
}

export default fastLinks;