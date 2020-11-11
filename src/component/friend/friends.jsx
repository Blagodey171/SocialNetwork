import React from 'react';
import './friends.scss'
import { NavLink } from 'react-router-dom';
import {follow, unfollow} from '../../DAL/userAPI';

let friends = (props) => {


    return (
        <div className='container'>
            {
                props.isFetching()
            }
            <div className='container-pages' >
                {props.pages}
            </div>
            <div className='container-user-card' >
                {
                    props.users.map(user =>
                        <div className='user-card' >
                            <div className='user-card__avatar'>
                                <NavLink to={`profile/${user.id}`}>
                                    <img src={user.photos.small} alt="" />
                                </NavLink>
                                {
                                    user.followed 
                                    ? <button disabled = {props.disabledButtonFollow.some(userId => userId === user.id)} onClick={() => {
                                            props.setDisabledButtonFollowAC(true, user.id)
                                            unfollow(user.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.subscribeAC(user.id)
                                                }
                                                props.setDisabledButtonFollowAC(false, user.id)
                                            })
                                            
                                        }
                                    }  className='user-card__follow'>UNFOLLOW</button> 
                                    : <button disabled = {props.disabledButtonFollow.some(userId => userId === user.id)} onClick={() => { 
                                            props.setDisabledButtonFollowAC(true, user.id)
                                            follow(user.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.subscribeAC(user.id)
                                                }
                                                props.setDisabledButtonFollowAC(false, user.id)
                                            })
                                            
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