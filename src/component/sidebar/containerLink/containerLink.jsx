import React from 'react';
import {NavLink} from 'react-router-dom';

const containerLink  = (props) => {
    return (
        <div className='containerLink'>
            <NavLink to={props.to} activeClassName='click'>{props.text}</NavLink>
        </div>
    ) 
}

export default containerLink;