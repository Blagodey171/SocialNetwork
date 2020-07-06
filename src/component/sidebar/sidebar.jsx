import React from 'react';
import './sidebar.scss';
import {NavLink} from 'react-router-dom';


const sidebar = (props) => {
    return (
        <div className='containerSidebar'>
            <div className='containerLink'>
                <NavLink to="/friend" activeClassName='click'>Друзья</NavLink>
            </div>
            <div className='containerLink'>
                <NavLink to="/messages" activeClassName='click'>Диалоги</NavLink>
            </div>
            <div className='containerLink'>
                <NavLink to="/profile" activeClassName='click'>Профиль</NavLink>
            </div>
            <div className='containerLink'>
                <NavLink to="/news" activeClassName='click'>Новости</NavLink>
            </div>
            <div className='containerLink'>
                <NavLink to="/music" activeClassName='click'>Музыка</NavLink>
            </div>
            <div className='containerLink'>
                <NavLink to="/settings" activeClassName='click'>Настройки</NavLink>
            </div>
        </div>
    )
}

export default sidebar;