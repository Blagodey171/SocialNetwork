import React from 'react';
import './messages.scss';

let messages = (props) => {
    let message = props.messages.map(message => <li><span>{message}</span></li>)

    let textareaValue = React.createRef();

    let changeTextarea = () => {
        let value = textareaValue.current.value;
        props.changeTextareaValue(value)
    }

    let addMessage = () => {
        props.addPost();
    }


    return (
        <div className='container'>
            <div className='container-dialogs'>
                {props.linkToChat}
            </div>
            <div className='container-messages'>
                <div className='chat-container'>
                    <div className='chat-container__dialog'>
                        {message}
                    </div>
                </div>
                <textarea value={props.textareaValue} onChange={changeTextarea} ref={textareaValue} className='textarea' placeholder='Введите сообщение...' ></textarea>
                <button onClick={addMessage} className='postBtn'>send</button>
            </div>

        </div>

    )
}

export default messages;