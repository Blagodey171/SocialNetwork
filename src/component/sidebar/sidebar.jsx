import React from 'react';
import './sidebar.scss';

const sidebar = (props) => {

    return (
        <div className='container-sidebar'>
            {props.allLink}
        </div>
    )
}

export default sidebar;