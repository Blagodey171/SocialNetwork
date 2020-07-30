import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Header from '../header/header';
import FastLinks from '../fastLinks/fastLinks';
import Friend from '../friend/friend';
import News from '../news/news';
import Profile from '../profile/profile';
import Settings from '../settings/settings';
import Music from '../music/music';
import Messages from '../messages/messages';
import Sidebar from '../sidebar/sidebar';

function App(props) {
    return (
        <div className='container-app'>
            <Header />
                <div className='container-two-column'>
                    <Sidebar  link={props.link}/>
                    <div className='content'>
                        <FastLinks />
                        <div className='content-main'>
                            <Route exact path='/friend' render= {() => <Friend/>} />
                            <Route exact path='/messages' render= {() => <Messages dialogs={props.dialogs} />} />
                            <Route exact path='/news' render= {() => <News/>} />
                            <Route exact path='/profile'  render= {() => <Profile posts={props.posts} addPost={props.addPost} textareaState={props.textareaState} changeTextareaValue={props.changeTextareaValue} /> }/>
                            <Route exact path='/settings' render= {() => <Settings  />} />
                            <Route exact path='/music' render= {() => <Music/>} />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default App;
