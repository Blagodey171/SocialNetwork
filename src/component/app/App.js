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
        <div className='containerApp'>
            <Header />
                <div className='containerWithTwoColumn'>
                    <Sidebar  link={props.link}/>
                    <div className='containerContent'>
                        <FastLinks />
                        <div className='contentApp'>
                            <Route path='/friend' render= {() => <Friend/>} />
                            <Route path='/messages' render= {() => <Messages dialogs={props.dialogs} />} />
                            <Route path='/news' render= {() => <News/>} />
                            <Route path='/profile' render= {() => <Profile/> }/>
                            <Route path='/settings' render= {() => <Settings  />} />
                            <Route path='/music' render= {() => <Music/>} />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default App;
