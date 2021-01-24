import React from 'react';
import './friends.scss'
import { NavLink } from 'react-router-dom';
import Preloader from '../preloader/preloader';
// import CoruselContainer from './corusel/coruselContainer.jsx';
import CoruselReducerr from './corusel/coruselReducer.jsx';
// corusel={props.corusel}
let friends = (props) => {
    return (
        <div className='container'>
                <CoruselReducerr pages={props.pages}  />
            <div className='container-user-card' >
                {
                    props.isFetching ? <Preloader/>
                    : props.users.map(user =>
                        <div className='user-card' >
                            <div className='user-card__avatar'>
                                <NavLink to={`profile/${user.id}`}>
                                    <img src={user.photos.small} alt="" />
                                </NavLink>
                                {
                                    user.followed
                                    ? <button disabled = {props.disabledButtonFollow.some(userId => userId === user.id)} onClick={() => {
                                        props.unfollowThunkCreator(user.id)
                                        }
                                    }  className='user-card__follow'>UNFOLLOW</button> 
                                    : <button disabled = {props.disabledButtonFollow.some(userId => userId === user.id)} onClick={() => {
                                        props.followThunkCreator(user.id)
                                        }
                                    } className='user-card__follow'>FOLLOW</button>
                                }
                            </div>
                            <div className='user-card__info' >
                                <div className='user-card__name'>
                                    {user.name}
                                </div>
                                <div className='user-card__navigation'>
                                    {user.navigation || 'Russia'}
                                    {user.navigation || 'dont know'}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )

}

export default friends;