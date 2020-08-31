import React from 'react';
import './messages.scss'
import Chat from './chat/chat';

import FriendItem from './frienditem/frienditem';
import { Route } from 'react-router-dom';

let messages = (props) => {
    let dialogs = props.dialogs.map(friend => <FriendItem to={friend.link} avatarImg={friend.img} name={friend.name} id={friend.id} />)
    
// let getNameDialogs = function (friends) {
//     let messageObj = friends.reduce((function (acc, el) {
//         acc[el.name] = {
//             id : el.id,
//             messages : [],
//         }
        
//         return acc;
        
//     }), {})
//     return messageObj; 
// }
// console.log(getNameDialogs(props.dialogs))

// let pathObj = {};
// props.dialogs.forEach(friend => pathObj[friend.link] = friend.link);

    return (
        <div className='container'>
            <div className='container-dialogs'>
                {dialogs}
            </div>
            <div className='container-messages'>
                <Route path='/messages/Danil' render={() => <Chat dispatch={props.dispatch} chatTextareaValue={props.dialogs[0].chatTextareaValue} name={props.dialogs[0].name} messages={props.dialogs[0].text} />} />
                <Route path='/messages/Vika' render={() => <Chat dispatch={props.dispatch} messages={props.dialogs[1].text} />} />
                <Route path='/messages/Jasmine' render={() => <Chat dispatch={props.dispatch} messages={props.dialogs[2].text} />} />
                <Route path='/messages/Zhenya' render={() => <Chat dispatch={props.dispatch} messages={props.dialogs[3].text} />} />
            </div>
        </div>
        
    )
}

export default messages;