import React from 'react';
import { useForm } from 'react-hook-form';
import './chat.scss';

let Chat = (props) => {
    const {handleSubmit, errors, register} = useForm()

    let {name: Danil} = props;

    const onSubmit = (e) => {
        props.addPost(props.name, e.Danil);
    }
    const inputMaxLength = 10;
    
    return (
        <div className='window-chat'>
            <div className='chat-container'>
                <div className='chat-container__dialog'>
                    {props.messages}
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name={Danil} ref={register({required: true, maxLength: {value: inputMaxLength}})} className='textarea' placeholder='Введите сообщение...' ></input>
                {errors.Danil?.type === 'maxLength' && `Input max length is ${inputMaxLength}`}
                <button type={'submit'} className='postBtn'>send</button>
            </form>

        </div>



    )
}

export default Chat;