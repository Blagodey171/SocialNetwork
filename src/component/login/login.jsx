import React from 'react';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

const LoginForm = (props) => {
    const onSubmit = (e) => {
        console.log(e)
    }
    return (
        <Form  onSubmit={onSubmit} render={({ handleSubmit }) => {
            return (
                <form onSubmit={handleSubmit} >
                    <div>
                        <Field component='input' name='login' />
                    </div>
                    <div>
                        <Field component='input' name='password' />
                    </div>
                    <div>
                        <Field component='input' type='checkbox' name='rememberMe' />
                    </div>
                    <div>
                        <button type='submit' >login</button>
                    </div>
                </form>
            )
        }} />

    )
}

const login = (props) => {
    return (
        <div>
            <LoginForm  />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        ...state.profileReducer,
    }
}

export default compose(
    connect(mapStateToProps)
)(login);