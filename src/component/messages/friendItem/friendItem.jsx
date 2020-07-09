import React from 'react';
import './friendItem';

const friendItem = (props) =>  {
    return (
        <div className='containerFriendItem' >
            <div className='avatar' >
                <img src={props.avatarImg} />
                <h3 className='name' >{props.name} </h3>
            </div>

            <h6 className='info' >{props.id} </h6>
        </div>
    )
}

export default friendItem;