import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Header from '../header/header';
import FastLinks from '../fastLinks/fastLinks';
import ContainerFriends from '../friend/containerFriends.jsx';
import News from '../news/news';
import ContainerProfile from '../profile/containerProfile';
import Settings from '../settings/settings';
import Music from '../music/music';
import ContainerMessages from '../messages/containerMessages';
import ContainerSidebar from '../sidebar/containerSidebar';

function App(props) {
    return (
        <div className='container-app'>
            <Header />
                <div className='container-two-column'>
                    <ContainerSidebar  />
                    <div className='content'>
                        <FastLinks />
                        <div className='content-main'>
                            <Route exact path='/friend' render= {() => <ContainerFriends/>} />
                            <Route  path='/messages' render= {() => <ContainerMessages/>}/>
                            <Route exact path='/news' render= {() => <News/>} />
                            <Route exact path='/profile'  render= {() => <ContainerProfile/> }/>
                            <Route exact path='/settings' render= {() => <Settings  />} />
                            <Route exact path='/music' render= {() => <Music/>} />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default App;
