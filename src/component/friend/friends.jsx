import React from 'react';
import './friends.scss'
import Avatar from '../../img/avatar/cat.png'
import { NavLink } from 'react-router-dom';
import Preloader from '../preloader/preloader';
import CoruselReducer from './corusel/coruselReducercopy.jsx';
import { useEffect } from 'react';

let Friends = (props) => {
    console.log(props)
    useEffect(() => {
        const unfollowButton = document.querySelector('.unfollow');
        const followButton = document.querySelector('.follow');
        console.log(unfollowButton)
        if(unfollowButton) {
            unfollowButton.addEventListener('click', (e) => {
                e.preventDefault();
                // console.log(e.target.id)
                props.unfollowThunkCreator(e.target.id)
            })
        }
        
    })


    return (
        <div className='container-friends'>
                <CoruselReducer pages={props.pages}/>
            <div className='container-user-card' >
                {
                    props.isFetching ? <Preloader/>
                    : props.users
                    
                }
            </div>
        </div>
    )

}

export default Friends;