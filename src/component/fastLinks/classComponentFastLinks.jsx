import React from 'react';
import FastLinks from './fastLinks';
import {authThunkCreator} from '../../redux/authReducer';
import { connect } from 'react-redux';


class ClassComponentFastLinks extends React.Component {
    constructor (props) {
        super (props);
        this.props = props;
    }

    componentDidMount () {
        this.props.authThunkCreator()
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
    authThunkCreator,
})(ClassComponentFastLinks)
