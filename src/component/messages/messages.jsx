import React from 'react';
import './messages.scss'

import FriendItem from './friendItem/friendItem';

const messages = (props) => {
let dialogs = props.dialogs.map(friend => <FriendItem avatarImg={friend.img} name={friend.name} id={friend.id} />)

    return (
        <div className='containerDialogs'>
            <div className='containerForFriends' >
                {dialogs}
            </div>

            <div className='containerMessages' >

            </div>
            
        </div>
    )
}

export default messages;