import React from 'react';
import './chat.scss'
import {changeTextareaValue , addPost} from '../../../redux/dialogsReducer';

let chat = (props) => {
    let messages = props.messages.map(message => <li>{message}</li>)

    let textareaValue = React.createRef();

    let changeTextarea = () => {
        let text = textareaValue.current.value;
        let name = textareaValue.current.name;
        props.dispatch(changeTextareaValue(text, name))
    }

    let addMessage = () => {
        let name = textareaValue.current.name;
        props.dispatch(addPost(name));
    }

    return (
        <div className='windowChat'>
            <div className='containerMessages'>
                
                    {messages}
                
            </div>
            <textarea name={props.name} value={props.chatTextareaValue} onChange={changeTextarea} ref={textareaValue} className='newMessage'></textarea>
            <button onClick={addMessage} className='buttonPostNewMessage'>send</button>
        </div>
    )
}

export default chat;