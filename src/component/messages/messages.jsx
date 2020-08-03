import React from 'react';
import './messages.scss'

import FriendItem from './frienditem/frienditem';
import { Route } from 'react-router-dom';

const messages = (props) => {
let dialogs = props.dialogs.map(friend => <FriendItem to={friend.link} avatarImg={friend.img} name={friend.name} id={friend.id} />)

    return (
        <div className='container-dialogs'>
            {/* <Route exact path={props.dialogs.link} render={() => <Chat />} /> */}
            {dialogs}
            
        </div>
    )
}

export default messages;