import React from 'react';
import './fastLinks.scss';
import {NavLink} from 'react-router-dom';


const fastLinks = (props) => {
    return (
        <div className='containerFastLinks'>
            {
            
            props.isAuth ? 'true' : <NavLink to='/login'>Login</NavLink>
            
            }
            
        </div>
    )
}

export default fastLinks;