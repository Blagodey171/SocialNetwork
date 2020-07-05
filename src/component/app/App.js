import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Friend from '../friend/friend';
import News from '../news/news';
import Profile from '../profile/profile';
import Settings from '../settings/settings';
import Music from '../music/music';
import Messages from '../messages/messages'

function App(props) {
    return (
        <div className='containerApp'>
            <Header />
            <div className='contentApp'>
                <Route path='/friend' component={Friend} />
                <Route path='/messages' component={Messages} />
                <Route path='/news' component={News} />
                <Route path='/profile' component={Profile} />
                <Route path='/settings' component={Settings} />
                <Route path='/music' component={Music} />
            </div>
        </div>
    );
}

export default App;
