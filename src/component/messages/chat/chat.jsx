import React from 'react';
import './chat.scss';

let chat = (props) => {
    let textareaValue = React.createRef();

    let changeTextarea = () => {
        let value = textareaValue.current.value;
        let name = textareaValue.current.name;
        props.changeTextareaValue(value, name)

    }

    let addMessage = () => {
        let name = textareaValue.current.name;
        props.addPost(name);
    }

    return (
        <div className='window-chat'>
            <div className='chat-container'>
                <div className='chat-container__dialog'>
                    {props.messages}
                </div>
            </div>
            <textarea name={props.name} value={props.chatTextareaValue} onChange={changeTextarea} ref={textareaValue} className='textarea' placeholder='Введите сообщение...' ></textarea>
            <button onClick={addMessage} className='postBtn'>send</button>
        </div>



    )
}

export default chat;