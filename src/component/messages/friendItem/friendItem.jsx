import React from 'react';
import './frienditem.scss';
import {NavLink} from 'react-router-dom';

let friendItem = (props) =>  {
    return (
        <NavLink to={props.to} className='link' >
            <div className='container-friend-item' >
                <div className='avatar-friend' >
                    <img src={props.avatarImg} alt='I am' />
                    <h3 className='name-friend' >{props.name} </h3>
                </div>
                <div className='last-message'>
                    <h4>{props.id} </h4>
                </div>
            </div>
        </NavLink>
    )
}

export default friendItem;