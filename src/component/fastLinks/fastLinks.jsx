import React from 'react';
import './fastLinks.scss';
import {NavLink} from 'react-router-dom';


let fastLinks = (props) => {
    return (
        <div className='containerFastLinks'>
            {
            
            props.isAuth 
            ? <div>
                <p>{props.login}</p>
                <button onClick={props.logoutThunkCreator} >Logout</button>
              </div> 
            :  <NavLink to='/login'>Login</NavLink>
            
            }
            
        </div>
    )
}

export default fastLinks;