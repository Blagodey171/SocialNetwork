import React from 'react';
import './messages.scss';
import Messages from './messages.jsx';
import { connect } from 'react-redux';
import { changeDialogsTextareaValue, addPost } from '../../redux/dialogsReducer';



// let containerMessages = (props) => {
//     let linkToChat = props.dialogs.map(friend => <FriendItem to={friend.link} avatarImg={friend.img} name={friend.name} id={friend.id} />);

//     let routs = props.dialogs.map(friend => <Route path={`/messages/${friend.name}`} render={() => <Chat dispatch={props.dispatch} chatTextareaValue={friend.chatTextareaValue} name={friend.name} messages={friend.text} />} />);


//     return <Messages linkToChat={linkToChat} routs={routs} />
// }

let mapStateToProps = (state) => {
    // let linkToChat = state.dialogsReducer.dialogsBlock.map(friend => <Frienditem to={friend.link} avatarImg={friend.img} name={friend.name} id={friend.id} />);

    // let routs = state.dialogsReducer.dialogsBlock.map(friend => <Route path={`/messages/${friend.name}`} render={() => <Chat chatTextareaValue={friend.chatTextareaValue} changeTextareaValue={changeTextareaValue} addPost={addPost} name={friend.name} messages={friend.text} />} />);

    // return {
    //     linkToChat,
    //     routs,
    // }

    return {
        usersDialogs: state.dialogsReducer.dialogsBlock,
    }
}

let containerMessages = connect(mapStateToProps, {
    changeDialogsTextareaValue,
    addPost,
})(Messages)
export default containerMessages;