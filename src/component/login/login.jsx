import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useForm } from 'react-hook-form';
import { loginThunkCreator } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import './login.scss'

let LoginForm = (props) => {
    const {handleSubmit, errors, register} = useForm();

    const onSubmit = (data) => {
        props.loginThunkCreator(data.email, data.password, data.rememberMe)
    }
    const loginMinLength = 7;
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    
    return (
        
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <input name='email' ref={register({ required: true })} />
                
            </div>
            <div>
                <input name='password' ref={register({ required: true, minLength: { value: loginMinLength } })}/>
                {errors.password?.type === 'minLength' && `min length is ${loginMinLength}`}
            </div>
            <div>
                <input type='checkbox' name='rememberMe' ref={register({ required: false, })} />
                <p>remember me</p>
            </div>
            {
                props.messageForIncorrectRegistration ? <div className='login__error-message'><p>{props.messageForIncorrectRegistration}</p></div> : <div className='login__error-message'><p>{'Введите логин и пароль'}</p></div>
            }
            <div>
                <button type='submit' >login</button>
            </div>
        </form>


    )
}



let mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        messageForIncorrectRegistration: state.authReducer.messageForIncorrectRegistration,
    }
}

export default compose(
    connect(mapStateToProps, {loginThunkCreator, })
)(LoginForm);