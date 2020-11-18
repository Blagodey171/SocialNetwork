import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const authMapStateToProps = (state) => {
    return {
        auth: state.authReducer.isAuth,
    }
}

export const withAuthRedirect = (Component) => {

    class redirectComponent extends React.Component {
        render() {
            return !this.props.auth ? <Redirect to='/login' /> : <Component {...this.props} />
        }
    }

    let connectedAuthRedirectComponent = connect(authMapStateToProps)(redirectComponent)

    return connectedAuthRedirectComponent
}


