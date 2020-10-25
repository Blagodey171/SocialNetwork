import React from 'react';
import './messages.scss';
import Messages from './messages.jsx';
import { connect } from 'react-redux';
import { changeDialogsTextareaValue, addPost } from '../../redux/dialogsReducer';


let mapStateToProps = (state) => {
    return {
        usersDialogs: state.dialogsReducer.dialogsBlock,
    }
}

let containerMessages = connect(mapStateToProps, {
    changeDialogsTextareaValue,
    addPost,
})(Messages)
export default containerMessages;