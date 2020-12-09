import React from 'react';
import FastLinks from './fastLinks';
import { authThunkCreator, logoutThunkCreator} from '../../redux/authReducer';
import { connect } from 'react-redux';


class ClassComponentFastLinks extends React.Component {
    constructor (props) {
        super (props);
        this.props = props;
    }

    componentDidMount () {
        this.props.authThunkCreator()
    }
    componentDidUpdate () {

    }

    render() {
        return <FastLinks {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.authReducer
    }
}

export default connect(mapStateToProps, {
    authThunkCreator,
    logoutThunkCreator,
})(ClassComponentFastLinks)
