import React from 'react';
import './messages.scss'
import Chat from './chat/chat';
import FriendItem from './frienditem/frienditem';
import Messages from './messages.jsx';

import { Route } from 'react-router-dom';

let containerMessages = (props) => {
    let linkToChat = props.dialogs.map(friend => <FriendItem to={friend.link} avatarImg={friend.img} name={friend.name} id={friend.id} />);

    let routs = props.dialogs.map(friend => <Route path={`/messages/${friend.name}`} render={() => <Chat dispatch={props.dispatch} chatTextareaValue={friend.chatTextareaValue} name={friend.name} messages={friend.text} />} />);


    return <Messages linkToChat={linkToChat} routs={routs} />
}

export default containerMessages;