import React from 'react';
import './friends.scss'
import * as axios from 'axios';

let friend = (props) => {
    
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                props.setUsers(res.data.items)
            })
        }
    

    return (
        <div className='container'>
            {
                props.users.map(user => 
                    <div className='user-card' >
                        <div className='user-card__avatar'>
                            <img src={user.photos.small} alt=""/>
                            {
                                user.follow ? <button onClick={() => {props.subscribe(user.id)}} className='user-card__follow'>UNFOLLOW</button> : 
                                <button onClick={() => {props.subscribe(user.id)}} className='user-card__follow'>FOLLOW</button>
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
    )
}

export default friend;