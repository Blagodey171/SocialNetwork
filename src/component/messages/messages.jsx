import React from 'react';
import './messages.scss';

let messages = (props) => {
    return (
        <div className='container'>
            <div className='container-dialogs'>
                {props.linkToChat}
            </div>
            <div className='container-messages'>
                {props.routs}
            </div>
        </div>
        
    )
}

export default messages;