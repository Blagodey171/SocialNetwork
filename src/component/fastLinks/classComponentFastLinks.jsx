import React from 'react';
import FastLinks from './fastLinks';
import {setAuthProfileAC} from '../../redux/authReducer';
import { connect } from 'react-redux';
import { auth } from '../../DAL/authAPI';

class ClassComponentFastLinks extends React.Component {
    constructor (props) {
        super (props);
        this.props = props;
    }

    componentDidMount () {
        auth().then(data => {
            if (data.resultCode === 0) {
                this.props.setAuthProfileAC(data.data)
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
