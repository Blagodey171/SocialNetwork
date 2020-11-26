import React from 'react';
import { Route } from 'react-router-dom';
import './messages.scss';
import Chat from './chat/chat';
import Frienditem from './frienditem/frienditem.jsx';

class classComponentMessages extends React.Component {
    constructor (props) {
        super(props);
        this.props = props;
    }

    setLinks() {
        let linkToChat = this.props.usersDialogs.map(friend => <Frienditem to={friend.link} avatarImg={friend.img} name={friend.name} id={friend.id} />);
        return linkToChat;
    }

    setRouts() {
        let routs = this.props.usersDialogs.map(friend => 
            <Route path={`/messages/${friend.name}`} render={() => 
                <Chat chatTextareaValue={friend.chatTextareaValue} changeDialogsTextareaValue={this.props.changeDialogsTextareaValue} addPost={this.props.addPost} name={friend.name} messages={friend.text} />
            } />);
        
        return routs;
    }

    render() {
        return (
            <div className='container'>
                <div className='container-dialogs'>
                    {this.setLinks()}
                </div>
                {this.setRouts()}
            </div>
        )
    }
}

export default classComponentMessages;