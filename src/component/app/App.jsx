import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Header from '../header/header';
import FastLinks from '../fastLinks/fastLinks';
import Friend from '../friend/friend';
import News from '../news/news';
import ContainerProfile from '../profile/containerProfile';
import Settings from '../settings/settings';
import Music from '../music/music';
import ContainerMessages from '../messages/containerMessages';
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
                            <Route  path='/messages' render= {() => <ContainerMessages dialogs={props.dialogs} dispatch={props.dispatch} />}/>
                            <Route exact path='/news' render= {() => <News/>} />
                            <Route exact path='/profile'  render= {() => <ContainerProfile dispatch={props.dispatch} posts={props.posts} addPost={props.addPost} postTextareaValue={props.postTextareaValue} changeTextareaValue={props.changeTextareaValue} /> }/>
                            <Route exact path='/settings' render= {() => <Settings  />} />
                            <Route exact path='/music' render= {() => <Music/>} />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default App;
