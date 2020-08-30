import React from 'react';
import './chat.scss'
import {changeTextareaValue , addPost} from '../../../redux/dialogsReducer';

let chat = (props) => {
    let messages = props.messages.map(message => <li>{message}</li>)

    let textareaValue = React.createRef();
    let changeTextarea = () => {
        let text = textareaValue.current.value;
        props.dispatch(changeTextareaValue(text))
    }

    let addMessage = () => {
        props.dispatch(addPost());
    }

    return (
        <div className='windowChat'>
            <div className='containerMessages'>
                <ul className='messages' >
                    {messages}
                </ul>
            </div>
            <textarea onChange={changeTextarea} ref={textareaValue} className='newMessage'></textarea>
            <button onClick={addMessage} className='buttonPostNewMessage'>send</button>
        </div>
    )
}

export default chat;