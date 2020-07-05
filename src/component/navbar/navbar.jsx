import React from 'react';
import './navbar.scss';
import {NavLink} from 'react-router-dom';


const navbar = (props) => {
    return (
        <div className='containerNavbar'>
            <div className='containerLink'>
                <NavLink to="/friend" activeClassName='click'>Друзья</NavLink>
            </div>
            <div className='containerLink'>
                <NavLink to="/messages" activeClassName='click'>Диалоги</NavLink>
            </div>
            <div className='containerLink'>
                <NavLink to="/profile">Профиль</NavLink>
            </div>
            <div className='containerLink'>
                <NavLink to="/news">Новости</NavLink>
            </div>
            <div className='containerLink'>
                <NavLink to="/music">Музыка</NavLink>
            </div>
            <div className='containerLink'>
                <NavLink to="/settings">Настройки</NavLink>
            </div>
        </div>
    )
}

export default navbar;