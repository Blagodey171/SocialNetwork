import React from 'react';
import ProfilePersonData from './profilePersonData';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getProfileStatusThunkCreator } from '../../../redux/profileReducer'

class containerProfilePersonData extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    userId = this.props.match.params.userId;
    
    componentDidMount = () => {
        this.props.getProfileStatusThunkCreator(this.userId)
    }
    state = {
        mode: false,
        status: this.props.getProfileStatusThunkCreator(this.userId),
        // сейчас синхронизация с глобальным стейтом, допилить редактирование статуса через локальный стейт=>затем меняется глобальный стейт
    }
    
    activateMode = () => {
        this.setState({
           mode: true
        })
    }
    deactivateMode = () => {
        this.setState({
           mode: false
        })
    }

    render () {
        return <ProfilePersonData {...this.props} localState={this.state} activateMode={this.activateMode} deactivateMode={this.deactivateMode} />
    }
}


let mapStateToProps = (state) => {
    return {
        ...state.profileReducer
    }
}
export default compose(
    connect(mapStateToProps, {
        getProfileStatusThunkCreator
    }),
    withRouter,
)(containerProfilePersonData); 