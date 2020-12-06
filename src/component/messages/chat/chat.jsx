import React from 'react';
import { Form, Field } from 'react-final-form';
import './chat.scss';

let chat = (props) => {
    const onSubmit = (e) => {
        let getNameKey = Object.keys(e)[0];
        props.addPost(e[props.name], getNameKey);
    }

    return (
        <div className='window-chat'>
            <div className='chat-container'>
                <div className='chat-container__dialog'>
                    {props.messages}
                </div>
            </div>
            <Form onSubmit={onSubmit} render={({ handleSubmit }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Field component={'input'} name={props.name} value={props.chatTextareaValue} className='textarea' placeholder='Введите сообщение...' ></Field>
                        <button type={'submit'} className='postBtn'>send</button>
                    </form>
                )
            }} />
            
        </div>



    )
}

export default chat;