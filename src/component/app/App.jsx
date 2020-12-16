import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import {initializeThunkCreator} from '../../redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import Header from '../header/header';
import ContainerFastLinks from '../fastLinks/classComponentFastLinks';
import ContainerFriends from '../friend/containerFriends.jsx';
import News from '../news/news';
import ContainerProfile from '../profile/containerProfile';
import Settings from '../settings/settings';
import Music from '../music/music';
import ContainerMessages from '../messages/containerMessages';
import ContainerSidebar from '../sidebar/containerSidebar';
import Login from '../login/login';
import Preloader from '../preloader/preloader';


class App extends React.Component {
    constructor (props) {
        super(props); 
        this.props = props
    }

    componentDidMount () {
        this.props.initializeThunkCreator()
    }
    render () {
        if (!this.props.initialize) {
            return <Preloader />
        }
        return (
            <div className='container-app'>
                <Header />
                    <div className='container-two-column'>
                        <ContainerSidebar  />
                        <div className='content'>
                            <ContainerFastLinks />
                            <div className='content-main'>
                                <Route exact path='/friend' render= {() => <ContainerFriends/>} />
                                <Route path='/messages' render= {() => <ContainerMessages/>}/>
                                <Route exact path='/news' render= {() => <News/>} />
                                <Route path='/profile/:userId?'  render= {() => <ContainerProfile/> }/>
                                <Route exact path='/settings' render= {() => <Settings  />} />
                                <Route exact path='/music' render= {() => <Music/>} />
                                <Route exact path='/login' render= {() => <Login/>} />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        ...state.authReducer,
        ...state.appReducer
    }
}

export default compose(

    connect(mapStateToProps, {initializeThunkCreator})
)(App) ;
