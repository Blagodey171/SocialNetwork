import React from 'react';
import FastLinks from './fastLinks';
import * as axios from 'axios';
import {setAuthProfileAC} from '../../redux/authReducer';
import { connect } from 'react-redux';




class ClassComponentFastLinks extends React.Component {
    constructor (props) {
        super (props);
        this.props = props;
    }

    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then(res => {
            if (res.data.resultCode === 0) {
                this.props.setAuthProfileAC(res.data.data)
            }
        })
    }

    render() {
        return <FastLinks {...this.props} />
    }
}




const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
    }
}


export default connect(mapStateToProps, {
    setAuthProfileAC,
})(ClassComponentFastLinks)
