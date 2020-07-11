import React from 'react';
import './messages.scss'

import FriendItem from './frienditem/frienditem';

const messages = (props) => {
let dialogs = props.dialogs.map(friend => <FriendItem avatarImg={friend.img} name={friend.name} id={friend.id} />)

    return (
        <div className='container-dialogs'>
            <div className='container-for-friends' >
                {dialogs}
            </div>

            <div className='container-messages' >

            </div>
            
        </div>
    )
}

export default messages;