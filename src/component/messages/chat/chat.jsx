import React from 'react';
import './chat.scss';

let chat = (props) => {
    let textareaValueDialogs = React.createRef();

    let changeTextareaDialogs = () => {
        let value = textareaValueDialogs.current.value;
        let name = textareaValueDialogs.current.name;
        props.changeDialogsTextareaValue(value, name)

    }

    let addMessage = () => {
        let name = textareaValueDialogs.current.name;
        props.addPost(name);
    }

    return (
        <div className='window-chat'>
            <div className='chat-container'>
                <div className='chat-container__dialog'>
                    {props.messages}
                </div>
            </div>
            <textarea name={props.name} value={props.chatTextareaValue} onChange={changeTextareaDialogs} ref={textareaValueDialogs} className='textarea' placeholder='Введите сообщение...' ></textarea>
            <button onClick={addMessage} className='postBtn'>send</button>
        </div>



    )
}

export default chat;