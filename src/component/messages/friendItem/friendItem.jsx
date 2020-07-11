import React from 'react';
import './frienditem.scss';

const friendItem = (props) =>  {
    return (
        <div className='container-friend-item' >
            <div className='container-avatar-friend' >
                <img className='avatar-friend' src={props.avatarImg} alt='I am' />
                <h3 className='name-friend' >{props.name} </h3>
            </div>

            <h6 className='info-friend' >{props.id} </h6>
        </div>
    )
}

export default friendItem;