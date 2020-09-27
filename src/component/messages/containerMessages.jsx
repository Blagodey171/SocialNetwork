import React from 'react';
import './messages.scss';
import Messages from './messages.jsx';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { changeTextareaValue, addPost } from '../../redux/dialogsReducer';
import Frienditem from './frienditem/frienditem.jsx';


// let containerMessages = (props) => {
//     let linkToChat = props.dialogs.map(friend => <FriendItem to={friend.link} avatarImg={friend.img} name={friend.name} id={friend.id} />);

//     let routs = props.dialogs.map(friend => <Route path={`/messages/${friend.name}`} render={() => <Chat dispatch={props.dispatch} chatTextareaValue={friend.chatTextareaValue} name={friend.name} messages={friend.text} />} />);


//     return <Messages linkToChat={linkToChat} routs={routs} />
// }

let mapStateToProps = (state) => {
    let linkToChat = state.dialogsReducer.dialogsBlock.map(friend => <Frienditem to={friend.link} avatarImg={friend.img} name={friend.name} id={friend.id} />);

    // let routs = state.dialogsReducer.dialogsBlock.map(friend => <Route path={`/messages/${friend.name}`} render={() => <Chat chatTextareaValue={friend.chatTextareaValue} name={friend.name} messages={friend.text} />} />);

    

    return {
        linkToChat,
        textareaValue: state.dialogsReducer.textareaValue,
        messages: state.dialogsReducer.messages,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeTextareaValue: (value) => {
            dispatch(changeTextareaValue(value))
        },
        addPost: () => {
            dispatch(addPost())
        }
    }
}
let containerMessages = connect(mapStateToProps, mapDispatchToProps)(Messages)
export default containerMessages;